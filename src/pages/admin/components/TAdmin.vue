<template>
    <div class="currencyTabBox">
        <div class="mainDataBox">
            <!--===========     基础操作     ==============-->
            <BaseOperation
                    :searchWhere="searchWhere"
                    @clickAddBtn="clickAddBtn"
                    @clickUpdateBtn="clickUpdateBtn"
                    @clickDelBtn="clickDelBtn"
                    @clickSearchBtn="clickSearchBtn"
                    @changeSearchBtn="changeSearchBtn"
            >
            </BaseOperation>
            <!--===========    表格数据     ==============-->
            <div class="tableBox scroll">
                <Table size="small" ref="adminTable"
                       :columns="TableHeader"
                       :data="tableData"
                       :loading="tableLoading"
                       @on-selection-change="selectionChange"
                       @on-row-click="clickRow"
                       highlight-row
                >
                    <template slot-scope="{row}" slot="status">
                        <span v-if="row.status === 0">正常</span>
                        <span v-else-if="row.status === 1">异常</span>
                        <span v-else-if="row.status === 2">未激活</span>
                    </template>
                </Table>
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
        </div>
        <div class="rightDataBox">
            <BasePanel title="角色">
                <span class="titleRight"
                      slot="titleRight"
                      @click="clickBasePanelAdd"
                >
                      <Icon type="md-add-circle"/>
                </span>
                <RoleList
                        :listData="baseListData"
                        @clickDelBtn="baseListDelClickBtn"
                        @clickRoleBtn="clickRoleBtn"
                ></RoleList>
            </BasePanel>
        </div>
        <!--===========    操作弹出层     ==============-->
        <PanelListCheckbox
                :ajaxObj="findPageTRole"
                ref="panelCheckboxRole"
                title="添加角色"
                @clickSaveBtn="clickSaveAddBtn"
                :selectData="PanelListCheckboxSelectData"
        ></PanelListCheckbox>

        <PanelTreeCheckbox
                :ajaxObj="findTPowerByRoleid"
                ref="panelPowerCheckbox"
                title="分配权限"
                @clickSaveBtn="clickSavePowerBtn"
                :dataArr="powerList"
        ></PanelTreeCheckbox>
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
    import {
        TitleJson,
        addFieldDataJson,
        updateFieldDataJson,
        TableHeaderJson,
        searchWhereJson
    } from "@/config/jsonObj/tAdmin";
    import {
        API_findPageTAdmin,
        API_delTAdmin,
        API_addTAdmin,
        API_findIdTAdmin,
        API_updateTAdmin
    } from "@/config/api/tAdmin";
    import {
        API_findRoleByAdminid,
        API_delTAdminRole
    } from "@/config/api/tAdminRole";

    import {
        API_findPageTRole
    } from "@/config/api/tRole";

    import {
        API_updataTAdminRoleByAdminid
    } from "@/config/api/tAdminRole";
    import {
        API_findTPowerByRoleid,
        API_findTPowerByAdminidAndRoleid
    } from "@/config/api/tPower";
    import {
        API_updateTAdminPowerByAdminidAndRoleid
    } from "@/config/api/tAdminPower";

    import '@/assets/admin/css/adminPage.css';
    import BaseOperation from '@/components/admin/BaseOperation';
    import BaseWindow from '@/components/admin/BaseWindow';
    import BasePanel from '@/components/admin/BasePanel';
    import BaseTree from '@/components/admin/BaseTree';
    import RoleList from '@/components/admin/RoleList';
    import PanelListCheckbox from '@/components/common/PanelListCheckbox';
    import PanelTreeCheckbox from '@/components/common/PanelTreeCheckbox';

    export default {
        name: "TAdmin",
        components: {
            BaseOperation,
            BaseWindow,
            BasePanel,
            BaseTree,
            RoleList,
            PanelListCheckbox,
            PanelTreeCheckbox
        },
        computed: {
            PanelListCheckboxSelectData: function () {
                let newArr = [];
                let baseListData = this.baseListData;
                for (let i = 0; i < baseListData.length; i++) {
                    newArr.push(baseListData[i].trole);
                }
                return newArr;
            }
        },
        data() {
            return {
                findPageTRole: API_findPageTRole,
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
                TableHeader: TableHeaderJson,         //表头
                tableData: [],      //数据
                total: 0,       //总数
                selectData: [],      //已经选择的数据
                //==========表格END
                //==========操作 START
                addFieldData: addFieldDataJson,//添加字段数据
                addFieldDataT: [],//添加字段数据
                addTitle: TitleJson,
                updateFieldData: updateFieldDataJson,//修改字段数据
                updateFieldDataT: [],//修改字段数据
                updateTitle: TitleJson,
                //========== 操作 END
                searchWhere: searchWhereJson,
                //==========  删除
                delType: "",//删除类型
                isDelInfo: false,
                isDelLoading: false,
                //======
                baseListData: [],
                rightObjData: {},
                selectRowData: {},
                //======= 分配权限
                findTPowerByRoleid: API_findTPowerByRoleid,
                roleInfo: {},
                powerList: []
            }
        },
        mounted() {
            this.requestTableDataFn();
            this.$refs.panelCheckboxRole.ajaxRequest();
        },
        methods: {
            /**
             * 多选
             */
            selectionChange: function (data) {
                this.selectData = data;
            },
            /**
             * 单选
             */
            clickRow: function (data) {
                this.selectRowData = data;
                this.findRoleByAdminid();
            },
            //=================================================== 操作  START
            /**
             * 点击添加
             */
            clickAddBtn: function () {
                this.addFieldDataT = this.addFieldData;
                this.$refs.refAddBaseWindow.operationWindow(true);
            },
            /**
             * 点击修改
             */
            clickUpdateBtn: function () {
                this.updateFieldDataT = this.updateFieldData;
                let that = this;
                let selectData = this.selectData;
                if (selectData.length === 1) {
                    this.findIdFn({id: selectData[0].id}, function () {
                        that.$refs.refUpdateBaseWindow.operationWindow(true);
                    })
                } else if (selectData.length > 1) {
                    this.$Message.warning("请选择一条数据");
                } else {
                    this.$Message.warning("请选择数据");
                }
            },
            /**
             * 点击删除
             */
            clickDelBtn: function () {
                let selectData = this.selectData;
                if (selectData.length > 0) {
                    this.delType = "mainData";
                    this.isDelInfo = true;
                } else {
                    this.$Message.warning("请选择数据");
                }
            },
            /**
             * 执行删除
             */
            delData: function () {
                let idArr = [];
                if (this.delType === "mainData") {
                    let selectData = this.selectData;
                    for (let i = 0; i < selectData.length; i++) {
                        idArr.push(selectData[i].id);
                    }
                    this.delIdFn(idArr);
                } else if (this.delType === "role") {
                    idArr.push(this.rightObjData.id);
                    this.delRightListFn(idArr);
                }
            },
            /**
             * 点击搜索
             */
            clickSearchBtn: function () {
                this.requestTableDataFn();
            },
            /**
             * 改变搜索条件
             */
            changeSearchBtn: function (obj) {
                if (obj.selectValue && obj.selectValue !== "") {
                    this.requestTableData.jsonStr = '{' + obj.selectValue + ':"' + obj.searchData + '"}';
                } else {
                    this.requestTableData.jsonStr = "";
                }
            },
            /**
             * 显示添加角色
             */
            clickBasePanelAdd: function () {
                let row = this.selectRowData;
                if (row.tid) {
                    this.$refs.panelCheckboxRole.setShow(true);
                } else {
                    this.$Message.warning("请选择用户！");
                }
            },
            clickRoleBtn: function (obj) {
                this.roleInfo = obj;
                this.$refs.panelPowerCheckbox.setShow(true);
                this.$refs.panelPowerCheckbox.ajaxRequest(obj.trole);
                this.REQUEST_API_findTPowerByAdminidAndRoleid()
            },

            REQUEST_API_findTPowerByAdminidAndRoleid: function () {
                let json = {
                    adminid: this.selectRowData.id,
                    adminroleid: this.roleInfo.id
                };
                this.powerList = [];
                API_findTPowerByAdminidAndRoleid(json).then(res => {
                    this.powerList = res;
                })
            },
            /**
             * 保存权限
             */
            clickSavePowerBtn: function (treeDataArr) {
                let json = {};
                json.adminid = this.selectRowData.id;
                json.adminroleid = this.roleInfo.id;
                json.idArr = [];
                for (let i = 0; i < treeDataArr.length; i++) {
                    json.idArr.push(treeDataArr[i].data.id);
                }
                this.$refs.panelPowerCheckbox.setLoading(true);
                API_updateTAdminPowerByAdminidAndRoleid(json).then(() => {
                    this.$Message.success("修改成功");
                    this.$refs.panelPowerCheckbox.setShow();
                    this.$refs.panelPowerCheckbox.setLoading();
                }).catch(() => {
                    this.$refs.panelPowerCheckbox.setLoading();
                    this.$Message.error("修改失败");
                })
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
            //=== 删除数据
            baseListDelClickBtn: function (rightObjData) {
                this.rightObjData = rightObjData;
                this.delType = "role";
                this.isDelInfo = true;
            },

            //======================================================================   请求数据
            //表格数据
            requestTableDataFn: function (successCallBack, errorCallBack) {
                this.tableData = [];
                this.selectData = [];
                this.tableLoading = true;
                API_findPageTAdmin(this.requestTableData).then(responseData => {
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
                API_addTAdmin(this.submitData).then(() => {
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
                API_updateTAdmin(this.submitData).then(() => {
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
                API_findIdTAdmin(sendObj).then(responseData => {
                    this.$refs.refUpdateBaseWindow.setfromData(responseData);
                    successCallBack ? successCallBack(responseData) : "";
                }, errorData => {
                    this.$Message.error("查询数据失败" + errorData);
                    errorCallBack ? errorCallBack(errorData) : "";
                });
            },
            //根ID删除数据
            delIdFn: function (sendObj, successCallBack, errorCallBack) {
                API_delTAdmin(sendObj).then(responseData => {
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
            },
            /**
             * 添加角色
             */
            clickSaveAddBtn: function (dataArr) {
                let roleidArr = [];
                for (let i = 0; i < dataArr.length; i++) {
                    roleidArr.push(dataArr[i].id);
                }
                let json = {};
                json.adminid = this.selectRowData.id;
                json.roleidArr = roleidArr;
                this.$refs.panelCheckboxRole.setLoading(true);
                API_updataTAdminRoleByAdminid(json).then(() => {
                    this.$refs.panelCheckboxRole.setShow();
                    this.$refs.panelCheckboxRole.setLoading();
                    this.findRoleByAdminid();
                }).catch(() => {
                    this.$refs.panelCheckboxRole.setLoading();
                })
            },
            /**
             * 删除角色
             * @param obj
             */
            delRightListFn: function (obj) {
                this.isDelLoading = true;
                API_delTAdminRole(obj).then(responseData => {
                    if (responseData.success) {
                        this.$Message.success(responseData.message);
                        this.isDelInfo = false;
                        this.isDelLoading = false;
                        this.findRoleByAdminid();
                    } else {
                        this.$Message.error("刪除失败" + responseData.message);
                    }
                    this.isDelLoading = false;
                }, errorData => {
                    this.isDelLoading = false;
                    this.$Message.error("刪除失败" + errorData);
                });
            },
            /**
             * 查找角色
             */
            findRoleByAdminid: function () {
                this.baseListData = [];
                this.panelCheckboxValue = [];
                API_findRoleByAdminid(this.selectRowData).then(responseData => {
                    if (responseData && responseData.length > 0) {
                        for (let i = 0; i < responseData.length; i++) {
                            responseData[i].name = responseData[i].trole.name;
                            this.panelCheckboxValue.push(responseData[i].trole[this.panelCheckboxKey]);
                        }
                    }
                    this.baseListData = responseData;
                }, errorData => {
                    this.isDelLoading = false;
                    this.$Message.error("查找失败" + errorData);
                });
            }
        }
    }
</script>

<style scoped lang="stylus">
    .currencyTabBox
        padding 0;
        height 100%
        overflow hidden;
        position: relative;

        .tableBox
            padding: 0 10px 10px 10px
            height calc(100% - 96px);
            overflow auto

        .mainDataBox
            height: 100%;
            margin-right: 200px;

        .pageBox
            width: 100%;
            min-height: 50px;
            text-align right;
            padding: 10px;
            border-top: 1px solid #eee;
            background: #fff;
            z-index: 10;

        .rightDataBox
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            overflow: hidden;
            background: #fff;
            width: 200px;
            border-left: 1px solid #eee;

            .titleRight
                cursor: pointer;

</style>
