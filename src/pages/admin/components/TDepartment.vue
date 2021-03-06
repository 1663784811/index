<template>
    <div class="currencyTabBox">
        <!--===========     基础操作     ==============-->
        <BaseOperation
                :searchWhere="searchWhere"
                @clickAddBtn="clickAddBtn"
                @clickUpdateBtn="clickUpdateBtn"
                @clickDelBtn="clickDelBtn"
                @clickSearchBtn="clickSearchBtn"
                @changeSearchBtn="changeSearchBtn"
        ></BaseOperation>
        <!--===========    表格数据     ==============-->
        <div class="tableBox scroll">
            <Table size="small" ref="adminTable"
                   :columns="TableHeader"
                   :data="tableData"
                   :loading="tableLoading"
                   @on-selection-change="selectionChange"
                   highlight-row
            ></Table>
        </div>
        <!--===========    分页     ==============-->
        <div class="pageBox">
            <Page show-total
                  show-elevator
                  show-sizer
                  :total="total"
                  :page-size="requestTableData.size"
                  @on-change="clickChangePage"
                  @on-page-size-change="clickChangeSize"
            />
        </div>
        <!--===========    操作弹出层     ==============-->
        <!--====  添加  ====-->
        <BaseWindow ref="refAddBaseWindow"
                    :title="addTitle"
                    :fieldData="addFieldDataT"
                    @submitForm="addSubmitForm"
        ></BaseWindow>
        <!--====  修改  ====-->
        <BaseWindow ref="refUpdateBaseWindow"
                    :title="updateTitle"
                    :fieldData="updateFieldDataT"
                    @submitForm="updateSubmitForm"
        ></BaseWindow>
        <!--======   删除提示   ======-->
        <Modal v-model="isDelInfo" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>刪除数据</span>
            </p>
            <div style="text-align:center">
                <p>是否要刪除?</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="isDelLoading" @click="delData">刪除</Button>
            </div>
        </Modal>

    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import {
        TitleJson,
        addFieldDataJson,
        updateFieldDataJson,
        TableHeaderJson,
        searchWhereJson
    } from "@/config/jsonObj/tDepartment.js";
    import {
        API_findPageTDepartment,
        API_addTDepartment,
        API_updateTDepartment,
        API_findIdTDepartment,
        API_delTDepartment
    } from "@/config/api/tDepartment.js";
    import BaseOperation from '@/components/admin/BaseOperation';
    import BaseWindow from '@/components/admin/BaseWindow';

    export default {
        name: "TPowerBasePage",
        components: {
            BaseOperation,
            BaseWindow
        },
        data() {
            return {
                //======================  基础数据
                addTitle: TitleJson,
                addFieldData: addFieldDataJson,
                addFieldDataT: [],//添加字段数据

                updateTitle: TitleJson,
                updateFieldData: updateFieldDataJson,
                updateFieldDataT: [],//修改字段数据

                TableHeader: TableHeaderJson,
                searchWhere: searchWhereJson,
                //=====================================================    请求参数
                requestTableData: {//请求表格数据参数
                    page: 1,
                    size: 30,
                    sort: "id_desc"
                },
                submitData: {},//添加修改提交数据,
                //=====================================================     响应数据
                //==========表格START
                tableLoading: true,
                tableData: [],  //数据
                total: 0,       //总数
                selectData: [], //已经选择的数据
                //========== 操作 END
                isDelInfo: false,
                isDelLoading: false
            }
        },
        created() {
            //====  数据
            this.requestTableDataFn();
        },
        methods: {
            //多选
            selectionChange: function (data) {
                this.selectData = data;
            },
            //=================================================== 操作  START
            //点击添加
            clickAddBtn: function () {
                this.addFieldDataT = this.addFieldData;
                this.$refs.refAddBaseWindow.operationWindow(true);
            },
            //点击修改
            clickUpdateBtn: function () {
                this.updateFieldDataT = this.updateFieldData;
                let that = this;
                let selectData = this.selectData;
                if (selectData.length == 1) {
                    this.findIdFn({id: selectData[0].id}, function () {

                        that.$refs.refUpdateBaseWindow.operationWindow(true);
                    })
                } else if (selectData.length > 1) {
                    this.$Message.success("请选择一条数据");
                } else {
                    this.$Message.success("请选择数据");
                }
            },
            //点击删除
            clickDelBtn: function () {
                let selectData = this.selectData;
                if (selectData.length > 0) {
                    this.isDelInfo = true;
                } else {
                    this.$Message.success("请选择数据");
                }
            },
            //执行删除
            delData: function () {
                this.isDelLoading = true;
                let selectData = this.selectData;
                let idArr = [];
                for (let i = 0; i < selectData.length; i++) {
                    idArr.push(selectData[i].id);
                }
                this.delIdFn(idArr);
            },
            //点击搜索
            clickSearchBtn: function () {
                this.requestTableDataFn();
            },
            //改变搜索条件
            changeSearchBtn: function (obj) {
                if (obj.selectValue && obj.selectValue != "") {
                    this.requestTableData.jsonStr = '{' + obj.selectValue + ':"' + obj.searchData + '"}';
                } else {
                    this.requestTableData.jsonStr = "";
                }
            },
            //=================================================== 操作  END
            //=== 添加提交表单数据
            addSubmitForm: function (formData) {
                this.submitData = formData;
                this.addSubmitDataFn();
            },
            //=== 修改提交表单数据
            updateSubmitForm: function (formData) {
                this.submitData = formData;
                this.updateSubmitDataFn();
            },
            //===== 分页
            clickChangePage: function (page) {
                this.requestTableData.page = page;
                this.requestTableDataFn();
            },
            clickChangeSize: function (size) {
                this.requestTableData.size = size;
                this.requestTableDataFn();
            },
            //======================================================================   请求数据
            //表格数据
            requestTableDataFn: function (successCallBack, errorCallBack) {
                this.tableData = [];
                this.selectData = [];
                this.tableLoading = true;
                API_findPageTDepartment(this.requestTableData).then(responseData => {
                    if (responseData.data) {
                        this.tableData = responseData.data;
                        this.total = responseData.total;
                        successCallBack ? successCallBack() : "";
                    } else {
                        this.$Message.error("查询数据失败:" + responseData.message);
                    }
                    this.tableLoading = false;
                }, errorData => {
                    this.$Message.error("查询数据失败" + errorData);
                    this.tableLoading = false;
                    errorCallBack ? errorCallBack(errorData) : "";
                });
            },
            //新增数据请求
            addSubmitDataFn: function () {
                this.$refs.refAddBaseWindow.setLoading(true);
                API_addTDepartment(this.submitData).then(() => {
                    this.$refs.refAddBaseWindow.operationWindow(false);
                    this.$refs.refAddBaseWindow.setfromData({});
                    this.$refs.refAddBaseWindow.setLoading(false);
                    this.$Message.success("添加成功");
                    this.addFieldDataT = [];
                    this.requestTableDataFn();
                }, errorData => {
                    this.$Message.error("添加失败" + errorData);
                    this.$refs.refAddBaseWindow.setLoading(false);
                });
            },
            //修改数据请求
            updateSubmitDataFn: function (successCallBack, errorCallBack) {
                this.$refs.refUpdateBaseWindow.setLoading(true);
                API_updateTDepartment(this.submitData).then(() => {
                    this.$refs.refUpdateBaseWindow.operationWindow(false);
                    this.$refs.refUpdateBaseWindow.setfromData({});
                    this.$refs.refUpdateBaseWindow.setLoading(false);
                    this.$Message.success("修改成功");
                    this.updateFieldDataT = [];
                    this.requestTableDataFn();
                    successCallBack ? successCallBack() : "";
                }, errorData => {
                    this.$refs.refUpdateBaseWindow.setLoading(false);
                    this.$Message.error("修改失败");
                    errorCallBack ? errorCallBack(errorData) : "";
                });
            },
            //根ID查找数据
            findIdFn: function (sendObj, successCallBack, errorCallBack) {
                API_findIdTDepartment(sendObj).then(responseData => {
                    this.$refs.refUpdateBaseWindow.setfromData(responseData);
                    successCallBack ? successCallBack(responseData) : "";
                }, errorData => {
                    this.$Message.error("查询数据失败" + errorData);
                    errorCallBack ? errorCallBack(errorData) : "";
                });
            },
            //根ID删除数据
            delIdFn: function (sendObj, successCallBack, errorCallBack) {
                API_delTDepartment(sendObj).then(responseData => {
                    this.$Message.success(responseData.message);
                    this.isDelInfo = false;
                    this.isDelLoading = false;
                    this.requestTableDataFn();
                    successCallBack ? successCallBack(responseData) : "";
                }, errorData => {
                    this.isDelLoading = false;
                    this.$Message.error("刪除失败" + errorData);
                    errorCallBack ? errorCallBack(errorData) : "";
                });
            }
        }

    }
</script>

<style scoped lang="stylus">
    .currencyTabBox
        padding 0px;
        height 100%;
        overflow hidden;

        .tableBox
            padding: 0 10px 10px 10px;
            height calc(100% - 96px);
            overflow auto;

        .pageBox
            width: 100%;
            min-height: 50px;
            text-align right;
            padding: 10px;
            border-top: 1px solid #eee;
            background: #fff;
            z-index: 10;
</style>
