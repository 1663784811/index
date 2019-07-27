<template>
    <!--======   多选面板   ======-->
    <Modal v-model="isShow"
           :title="title"
           :mask-closable="false"
    >
        <div class="checkboxDiv">
            <template v-if="treeArrayData.length >0">
                <Tree
                        :data="treeArrayData"
                        show-checkbox ref="treeRef"
                ></Tree>
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
    import {
        CREATETREESTRUCTURE,
        IS_ARRAYHAVE
    } from '@/assets/common/js/global.js';

    export default {
        name: "PanelTreeCheckbox",
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
            dataArr: {
                type: [Array],
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                isShow: false,
                isLoading: false,
                treeData: [],
                selectDate: this.dataArr
            }
        },
        created() {

        },
        methods: {
            submitForm: function () {
                let td = this.$refs.treeRef.getCheckedAndIndeterminateNodes();
                this.$emit("clickSaveBtn", td);
            },
            setShow(is = false) {
                this.isShow = is;
            },
            setLoading(is = false) {
                this.isLoading = is;
            },
            createTreeJson: function (original) {
                let json = {
                    id: original.tid,
                    pid: original.pid,
                    name: original.name,
                    title: original.name,
                    expand: true,
                    icon: original.iconType,
                    isOpenTree: original.isOpenTree === undefined ? (original.isOpenTree = true) : original.isOpenTree,
                    isActive: original.isActive === undefined ? (original.isActive = false) : original.isActive,
                    isSelect: original.isSelect === undefined ? (original.isSelect = true) : original.isSelect,
                    data: original
                };
                return json;
            },
            ajaxRequest: function (parameter = {}) {
                if (this.ajaxObj) {
                    this.ajaxObj(parameter).then(res => {
                        this.treeData = res;
                    });
                }
            }
        },
        watch: {
            dataArr: function () {
                this.selectDate = this.dataArr;
            }
        },
        computed: {
            treeArrayData: function () {
                let newArr = [];
                let treeData = this.treeData;
                for (let i = 0; i < treeData.length; i++) {
                    let treeJson = this.createTreeJson(treeData[i]);
                    let arrindex = IS_ARRAYHAVE(this.selectDate, treeData[i].tid, 'tid');
                    arrindex === -1 ? treeJson.checked = false : treeJson.checked = true;
                    newArr.push(treeJson);
                }
                let tree = CREATETREESTRUCTURE(newArr);

                return tree ? tree : [];
            }
        }
    }
</script>

<style scoped lang="stylus">
    .checkboxDiv
        padding: 20px;

        .noDate
            text-align: center;

</style>
