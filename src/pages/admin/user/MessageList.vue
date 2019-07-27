<template>
    <div class="messageDetails">
        <div class="pageLeft">
            <BasePanel title="消息列表">
                <ul class="messageUl">
                    <li class="messageLi"
                        v-for="(name ,key) in messageListData"
                        :class="{active:messageType===key}"
                        @click="changeMessage(key)">
                        <span class="messageA">{{name}}</span>
                    </li>
                </ul>
            </BasePanel>
        </div>
        <div class="pageRight">
            <Table v-if="islist"
                   size="small"
                   ref="adminTable"
                   @on-row-click="selectionChange"
                   highlight-row
                   :columns="TableHeader"
                   :data="tableData">
                <template slot-scope="{row}" slot="status">
                    <span>{{ status2String(row.status) }}</span>
                </template>
            </Table>
            <MessageDetails v-if="!islist" :articleData="articleData"></MessageDetails>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import global from '@/assets/common/js/global.js';
    import BasePanel from "@/components/admin/BasePanel";
    import MessageDetails from "@/components/admin/MessageDetails.vue";

    export default {
        name: "MessageList",
        components: {
            BasePanel,
            MessageDetails
        },
        data() {
            return {
                requestTableData: {},
                //==========表格START
                TableHeader: [],         //表头
                tableData: [],      //数据
                total: 10000,       //总数
                selectData: [],      //已经选择的数据
                //==========表格END
                searchWhere: [],
                messageType: 2,
                islist: false,
                messageListData: ["全部消息", "未读消息", "已读消息"],
                articleData: {}
            }
        },

        methods: {
            /**
             * 选择
             */
            selectionChange: function (data1) {
                this.islist = false;
                this.findMyMessage(data1.id);
            },
            /**
             * 改变消息状态
             */
            changeMessage: function (index) {
                this.messageType = index;
                this.islist = true;
                if (index === 0) {
                    this.requestTableData.status = "";
                } else {
                    this.requestTableData.status = index - 1;
                }
                this.requestTableDataFn();
            },
            //=======================   请求数据
            /**
             * 获取消息列表
             */
            requestTableDataFn: function () {
                AJAXGET("/admin/findMyMessageList", this.requestTableData, 1).then(res => {
                    let tempArr = [];
                    for (let i = 0; i < res.length; i++) {
                        let json = res[i];
                        json.title = res[i].tmessage.title;
                        tempArr.push(json)
                    }
                    this.tableData = tempArr;
                }, res => {
                    this.$Message.error("错误：" + res);
                });
            },
            /**
             * 查询消息详情
             * @param id
             */
            findMyMessage: function (id) {
                AJAXGET("/admin/findMyMessage", {id: id}, 1).then(res => {
                    let json = {};
                    json.title = res.tmessage.title;
                    json.author = res.tmessage.author;
                    json.content = res.tmessage.content;
                    json.time = res.createtime;
                    this.articleData = json;
                }).catch(res => {
                    this.$Message.error("错误：" + res);
                })
            },
            /**
             * 计算状态
             * @param status
             * @returns {string}
             */
            status2String: function (status) {
                if (status === 0) {
                    return "未读";
                } else {
                    return "已读";
                }
            }
        },
        created() {
            let route = this.$route;
            if (route.params.type && route.params.type !== "") {
                this.messageType = parseInt(route.params.type);
            }
            if (route.params.id && route.params.id !== "") {
                //详情
                this.islist = false;
                this.findMyMessage(route.params.id);
            } else {
                //列表
                this.islist = true;
                this.requestTableDataFn();
            }
            //====   表头
            AJAXGET("/my_message.json", {}).then(responseData => {
                let tempFieldData = responseData.fieldList;
                for (let i = 0; i < tempFieldData.length; i++) {
                    if (tempFieldData[i].isWhere) {
                        let json = {};
                        json.keyStr = tempFieldData[i].javaWhere + '_' + tempFieldData[i].javaType + '_' + tempFieldData[i].key;
                        json.name = tempFieldData[i].title;
                        this.searchWhere.push(json)
                    }
                    if (tempFieldData[i].isShowColumn) {
                        this.TableHeader.push(tempFieldData[i])
                    }
                }
            });
        }
    }
</script>

<style scoped lang="stylus">
    .messageDetails
        width: 100%;
        height: 100%;

        .pageLeft
            width: 150px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            background: #c8cfd6;

            .messageUl
                .messageLi
                    .messageA
                        display: block;
                        padding: 8px 0px 8px 20px;
                        color: #333;
                        font-size: 12px;
                        cursor: pointer;

                    &.active
                        background: #fff;

                    &:hover
                        background: #efefef


        .pageRight
            margin-left: 150px;
            height: 100%;
            padding: 10px;
            overflow: auto;


</style>








