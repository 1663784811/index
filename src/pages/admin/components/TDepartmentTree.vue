<template>
    <!--==============   基础树  =============-->
    <div class="baseTree">
        <TreeNode
                :treeData="treeArray"
                @clickNode="clickChildren"
                @clickIcon="clickIcon"
                theme="normal"
        ></TreeNode>
    </div>
</template>

<script>
    import TreeNode from "./TreeNode";
    import {CREATETREESTRUCTURE} from "@/assets/common/js/global";
    import {API_findAllTDepartment} from '@/config/api/tDepartment';

    export default {
        name: "TDepartmentTree",
        components: {
            TreeNode
        },
        data() {
            return {
                isNav: false,
                treeOriginal: [],
                treeArrayDate: [],
            }
        },
        created: function () {
            API_findAllTDepartment().then(responseDate => {
                    responseDate.unshift({name: "全部", pid: "", tid: "ROOT"});
                    let newArr = [];
                    for (let i = 0; i < responseDate.length; i++) {
                        let json = this.createTreeJson(responseDate[i]);
                        newArr.push(json);
                    }
                    this.treeArrayDate = newArr;
                }
            );
        },
        methods: {
            //点击标题文字
            clickChildren: function (treeNode, haveChildren) {
                if (this.isNav) {
                    treeNode.isOpenTree = !treeNode.isOpenTree;
                }
                this.changeTreeNode(this.createTreeJson(treeNode), false, haveChildren);
            },
            //点击icon
            clickIcon: function (treeNode, haveChildren) {
                treeNode.isOpenTree = !treeNode.isOpenTree;
                this.changeTreeNode(this.createTreeJson(treeNode), true, haveChildren);
            },
            //改变数据
            changeTreeNode: function (treeNode, isClickIcon = false, haveChildren = false) {
                let treeOriginal = this.treeArrayDate;
                for (let i = 0; i < treeOriginal.length; i++) {
                    if (isClickIcon) {
                        if (treeOriginal[i].id === treeNode.id) {
                            this.$set(this.treeArrayDate, i, treeNode);
                        }
                    } else {
                        //点击标题
                        if (treeOriginal[i].id === treeNode.id) {
                            treeNode.isActive = true;
                            this.$set(this.treeArrayDate, i, treeNode);
                        } else {
                            this.treeArrayDate[i].isActive = false;
                            this.$set(this.treeArrayDate, i, this.treeArrayDate[i]);
                        }
                    }
                }
                this.$emit("clickNode", treeNode.data, haveChildren);
            },
            createTreeJson: function (original) {
                let json = {};
                json.id = original.tid;
                json.pid = original.pid;
                json.name = original.name;
                json.icon = original.iconType;
                json.isOpenTree = original.isOpenTree === undefined ? (original.isOpenTree = true) : original.isOpenTree;
                json.isActive = original.isActive === undefined ? (original.isActive = false) : original.isActive;
                json.data = original;
                return json;
            }
        },
        computed: {
            treeArray: function () {
                return CREATETREESTRUCTURE(this.treeArrayDate);
            }
        }
    }
</script>

<style>
</style>
