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
            >
            </Table>
        </div>
        <!--===========    分页     ==============-->
        <div class="pageBox">
            <Page show-total
                  show-elevator
                  show-sizer
                  :total="requestTableData.total"
                  :page-size="requestTableData.size"
                  @on-change="clickChangePage"
                  @on-page-size-change="clickChangeSize"
            />
        </div>
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
    import BaseOperation from '@/components/admin/BaseOperation';
    import {
        TitleJson,
        addFieldDataJson,
        updateFieldDataJson,
        TableHeaderJson,
        searchWhereJson
    } from "@/config/jsonObj/tKnowledge";

    import {
        API_findPageTKnowledge,
        API_delTKnowledge,
        API_saveTKnowledge
    } from "@/config/api/tKnowledge";


    export default {
        name: "TKnowledge",
        components: {
            BaseOperation
        },
        data() {
            return {
                winTitle: "知识",
                winShow: false,
                winFieldData: [],
                winValueData: {},
                winLoadding: false,
                //======================  基础数据
                addTitle: TitleJson,
                addFieldData: addFieldDataJson,
                updateTitle: TitleJson,
                updateFieldData: updateFieldDataJson,

                TableHeader: TableHeaderJson,
                searchWhere: searchWhereJson,

                requestTableData: {//请求表格数据参数
                    page: 1,
                    size: 30,
                    total: 0,
                    sort: "id_desc"
                },
                submitData: {},//添加修改提交数据,
                //=====================================================     响应数据
                //==========表格START
                tableLoading: true,
                tableData: [],      //数据
                selectData: [],      //已经选择的数据
                //==========表格END
                //==========  删除
                isDelInfo: false,
                isDelLoading: false
            }
        },
        mounted() {
            this.requestTableDataFn();
        },
        methods: {
            //多选
            selectionChange: function (data) {
                this.selectData = data;
            },
            //点击添加
            clickAddBtn: function () {
                this.$router.push({
                    path: "/admin/TKnowledgeUpdate"
                });
            },
            //点击修改
            clickUpdateBtn: function () {
                let selectData = this.selectData;
                if (selectData.length === 1) {
                    this.$router.push({
                        path: "/admin/TKnowledgeUpdate",
                        query: {id: selectData[0].id}
                    });
                } else if (selectData.length > 1) {
                    this.$Message.warning("请选择一条数据");
                } else {
                    this.$Message.warning("请选择数据");
                }
            },
            //点击删除
            clickDelBtn: function () {
                let selectData = this.selectData;
                if (selectData.length > 0) {
                    this.isDelInfo = true;
                } else {
                    this.$Message.warning("请选择数据");
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
                if (obj.selectValue && obj.selectValue !== "") {
                    this.requestTableData.jsonStr = '{' + obj.selectValue + ':"' + obj.searchData + '"}';
                } else {
                    this.requestTableData.jsonStr = "";
                }
            },
            //=================================================== 操作  END
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
            requestTableDataFn: function () {
                this.tableData = [];
                this.selectData = [];
                this.tableLoading = true;
                API_findPageTKnowledge(this.requestTableData).then(res => {
                    this.requestTableData.page = res.page;
                    this.requestTableData.size = res.size;
                    this.requestTableData.total = res.total;
                    this.tableData = res.data;
                    this.tableLoading = false;
                }, errorData => {
                    this.$Message.error("查询数据失败" + errorData);
                    this.tableLoading = false;
                });
            },
            //根ID删除数据
            delIdFn: function (sendObj) {
                API_delTKnowledge(sendObj).then(responseData => {
                    this.$Message.success(responseData.message);
                    this.isDelInfo = false;
                    this.isDelLoading = false;
                    this.requestTableDataFn();
                }, errorData => {
                    this.isDelLoading = false;
                    this.$Message.error("刪除失败," + errorData);
                });
            }
        }
    }
</script>

<style scoped lang="stylus">
    .currencyTabBox
        padding 0;
        height 100%;
        overflow hidden;

        .tableBox
            padding: 0 10px 10px 10px;
            height calc(100% - 100px);
            overflow auto;

        .pageBox
            width: 100%;
            min-height: 50px;
            text-align right;
            padding: 10px;
            border-top: 1px solid #eee;
            background: #fff;
            z-index: 10;
            position: absolute;
            bottom: 0;
</style>
