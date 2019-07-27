<template>
    <!--======   多选面板   ======-->
    <Modal v-model="isShow"
           :title="title"
           :mask-closable="closable"
    >
        <div class="checkboxDiv">
            <template v-if="checkBoxData.length >=0">
                <div class="tagBox" v-show="tagData.length>0">
                    <Tag closable color="success" v-for="tag in tagData" @on-close="closeTag(tag.tid)">{{tag.name}}
                    </Tag>
                </div>
                <div class="tableBox">
                    <Table size="small" ref="adminTable"
                           :columns="tableHeader"
                           :data="tableDataCompute"
                           :loading="tableLoading"
                           highlight-row
                           @on-select="updateSelect"
                           @on-select-cancel="updateSelect"
                           @on-select-all-cancel="updateSelect"
                           @on-select-all="updateSelect"
                    ></Table>
                </div>
                <div class="pageBox">
                    <Page :total="total" :page-size="size" @on-change="changePage"/>
                </div>

            </template>
            <template v-else>
                <p class="noDate">暂无数据</p>
            </template>
        </div>
        <div slot="footer">
            <Button type="success" size="large" long :loading="isLoading" @click="submitForm">保存</Button>
        </div>
    </Modal>
</template>

<script>
    import UrlCheckbox from "../form/UrlCheckbox.vue";
    import {IS_ARRAYHAVE} from '@/assets/common/js/global';

    export default {
        name: "PanelListCheckbox",
        components: {
            UrlCheckbox
        },
        props: {
            ajaxObj: {
                type: Function
            },
            title: {
                type: String,
                default() {
                    return "标题";
                }
            },
            closeProhibit: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            tableHeader: {
                type: Array,
                default() {
                    return [
                        {
                            type: 'selection',
                            width: 60,
                            key: 'tid'
                        },
                        {
                            title: '名称',
                            key: 'name'
                        }
                    ];
                }
            },
            selectData: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                requestJson: {},
                total: 0,
                size: 5,
                page: 1,
                isShow: false,
                isLoading: false,
                closable: false,
                social: [],
                checkBoxData: [],
                setValueData: [],
                tagData: this.selectData,
                tableLoading: false,
                tableData: []
            }
        },
        methods: {
            changePage: function (page) {
                this.page = page;
                this.ajaxRequest(this.requestJson);
            },
            closeTag: function (tid) {
                for (let i = 0; i < this.tagData.length; i++) {
                    if (this.tagData[i].tid === tid) {
                        this.tagData.splice(i, 1);
                        i--;
                    }
                }
            },
            submitForm: function () {
                this.$emit("clickSaveBtn", this.tagData);
            },
            updateSelect: function (selected) {
                let tableData = this.tableData;
                for (let i = 0; i < tableData.length; i++) {
                    //判断是否有选中
                    if (IS_ARRAYHAVE(selected, tableData[i].tid, "tid") !== -1) {
                        let tagIndex = IS_ARRAYHAVE(this.tagData, tableData[i].tid, "tid");
                        if (tagIndex !== -1) {
                            //更新
                            this.tagData[tagIndex] = tableData[i];
                        } else {
                            //添加
                            this.tagData.push(tableData[i]);
                        }
                    } else {
                        this.closeTag(tableData[i].tid);
                    }
                }
            },
            setShow(is = false) {
                this.isShow = is;
            },
            setLoading(is = false) {
                this.isLoading = is;
            },
            ajaxRequest: function (parameter = {}) {
                parameter.page = this.page;
                parameter.size = this.size;
                this.requestJson = parameter;
                if (this.ajaxObj) {
                    this.tableLoading = true;
                    this.ajaxObj(parameter).then(res => {
                        this.size = res.size;
                        this.total = res.total;
                        this.tableData = res.data;
                        this.tableLoading = false;
                    }).catch(() => {
                        this.tableLoading = false;
                    });
                }
            }
        },
        computed: {
            tableDataCompute: function () {
                let arr = [];
                let tableData = this.tableData;
                for (let i = 0; i < tableData.length; i++) {
                    if (IS_ARRAYHAVE(this.tagData, tableData[i].tid, 'tid') !== -1) {
                        tableData[i]._checked = true;
                    } else {
                        tableData[i]._checked = false;
                    }
                    arr.push(tableData[i]);
                }
                return arr;
            }
        },
        watch: {
            selectData: function () {
                this.tagData = this.selectData;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .checkboxDiv

        .noDate
            text-align: center;

        .tableBox
            margin-bottom: 20px;

        .pageBox
            text-align: center;


        .tagBox
            margin-bottom: 20px;
            text-align: center;
</style>
