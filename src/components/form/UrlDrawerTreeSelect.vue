<template>
    <div class="urlDrawer">
        <Button long @click="showDrawerFn">{{ title}}</Button>
        <Drawer
                :closable="false"
                v-model="showDrawer"
                :transfer="false"
        >
            <div class="drawerBox">
                <Tree :data="treeArrayData" @on-select-change="selectChange"></Tree>
            </div>
            <div class="footerSave">
                <Button size="small" @click="showDrawer=!showDrawer">取消</Button>
                <Button class="confirm" type="success" size="small" @click="clickConfirm">确定</Button>
            </div>
        </Drawer>
    </div>
</template>

<script>

    import {AJAXGET, CREATETREESTRUCTURE} from "@/assets/common/js/global";

    export default {
        name: "UrlDrawerTreeSelect",
        props: {
            url: {
                type: String,
                default() {
                    return "";
                }
            },
            keyStr: {
                type: String,
                default() {
                    return "key";
                }
            },
            dataName: {
                type: String,
                default() {
                    return "name";
                }
            },
            value: {
                type: String,
                default() {
                    return "";
                }
            }
        },
        created() {
            AJAXGET(this.url).then(res => {
                this.treeData = res;
            })
        },
        data() {
            return {
                showDrawer: false,
                nowValue: this.value,
                title: '请选择',
                selectObj: {},
                treeData: [],//树数据
            };
        },
        methods: {
            //显示
            showDrawerFn: function () {
                this.getDate();
                this.showDrawer = true;
            },
            // 选择
            selectChange: function (obj) {
                this.selectObj = obj[0];
            },
            // 提交
            clickConfirm: function () {
                if (this.selectObj || (this.nowValue && this.nowValue !== "")) {
                    this.showDrawer = false;
                    this.title = this.selectObj.title;
                    this.$emit("confirmValue", this.selectObj.id, this.keyStr);
                } else {
                    this.$Message.warning("请选择")
                }
            },
            createTreeJson: function (original) {
                let isselect = original.tid === this.nowValue;
                if (isselect) {
                    this.title = original.name
                }
                let json = {
                    id: original.tid,
                    pid: original.pid,
                    name: original.name,
                    title: original.name,
                    expand: true,
                    selected: isselect,
                    icon: original.iconType,
                    isOpenTree: original.isOpenTree === undefined ? (original.isOpenTree = true) : original.isOpenTree,
                    isActive: original.isActive === undefined ? (original.isActive = false) : original.isActive,
                    isSelect: original.isSelect === undefined ? (original.isSelect = true) : original.isSelect,
                    data: original
                };
                return json;
            },
            getDate: function () {
                this.title = "请选择";
                if (this.url !== "") {
                    AJAXGET(this.url).then(res => {
                        this.treeData = res;
                    })
                } else {
                    this.treeData = new Array();
                }
            }
        },
        computed: {
            treeArrayData: function () {
                let newArr = [];
                let treeData = this.treeData;
                for (let i = 0; i < treeData.length; i++) {
                    newArr.push(this.createTreeJson(treeData[i]));
                }
                return CREATETREESTRUCTURE(newArr);
            }
        },
        watch: {
            value: function () {
                this.nowValue = this.value
            },
            url: function () {
                this.getDate();
            }
        }
    }
</script>

<style scoped lang="stylus">
    .urlDrawer
        position: relative;

    .drawerBox
        height: 100%;
        padding: 16px 16px 50px 16px;
        overflow-y: auto

    .footerSave
        border-top: 1px solid #eee;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px 0;
        background: #fff;

        .confirm
            margin-left: 20px;
</style>
