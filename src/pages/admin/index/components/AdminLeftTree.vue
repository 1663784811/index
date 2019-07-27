<template>
    <!--==============   基础树  =============-->
    <div class="baseTree">
        <TreeNode
                :treeData="treeArray"
                @clickNode="clickChildren"
                @clickIcon="clickIcon"
        ></TreeNode>
    </div>
</template>

<script>
    import TreeNode from "@/components/tree/TreeNode.vue";
    import {CREATETREESTRUCTURE} from "@/assets/common/js/global.js";
    import {getAdminTree} from '@/config/api/getData';

    export default {
        name: "AdminLeftTree",
        components: {
            TreeNode
        },
        data() {
            return {
                isNav: true,
                treeOriginal: [],
                treeArrayDate: [],
            }
        },
        created: function () {
            getAdminTree().then(responseDate => {
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
            changeTreeNode: function (treeNode, isClickIcon = false, haveChildren) {
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
                if (!haveChildren) {
                    this.$store.dispatch("admin/changeTabDate", treeNode.data);
                }

            },
            createTreeJson: function (original) {
                let json = {
                    id: original.tid,
                    pid: original.pid,
                    name: original.name,
                    icon: original.iconType,
                    isOpenTree: original.isOpenTree === undefined ? (original.isOpenTree = true) : original.isOpenTree,
                    isActive: original.isActive === undefined ? (original.isActive = false) : original.isActive,
                    data: original
                };
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
