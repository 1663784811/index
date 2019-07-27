<template>
    <!--==============   基础树  =============-->
    <CollapseTransition>
        {{treeArray.length}}
        <ul v-if="treeArray.length">
            <li v-for="(treeNode, key) in treeArray" :key="key">
                <div class="node">
                    <div class="nodeContent"
                         :class="{
                            haveChild:(treeNode.children && treeNode.children.length > 0),
                            active:(treeNode.isActive && !treeNode.children)
                         }"
                         @click.stop.prevent="clickNode(treeNode.data)"
                         :style="{paddingLeft : treeLayer * 10 +'px' }"
                    >
                        <Icon v-if="treeNode.children" :type="treeNode.icon||'ios-folder-open'"/>
                        <Icon v-else="treeNode.children" :type="treeNode.icon||'md-list-box'"/>
                        <span class="nodeText">{{ treeNode.name }}</span>
                    </div>
                    <span
                            v-if="treeNode.children"
                            class="treeRightIcon"
                            @click.stop.prevent="clickIcon(treeNode.data)"
                    >
                         <Icon :type="treeNode.isOpenTree ? 'md-arrow-dropdown':'md-arrow-dropright'"/>
                    </span>
                </div>
                <TreeNode ref="treeUlRef"
                          v-show="openTree(treeNode.isOpenTree)"
                          :treeData="treeNode.children"
                          :treeLayer="treeLayer+1"
                          @clickNode="clickChildren"
                          @clickIcon="clickIcon"
                >
                </TreeNode>
            </li>
        </ul>
    </CollapseTransition>
</template>

<script>
    import CollapseTransition from '@/assets/common/js/collapseTransition.js';

    export default {
        name: "TreeNode",
        components: {
            CollapseTransition
        },
        props: {
            //==== 树数据
            treeData: {
                type: Array,
                request: true,
                default() {
                    return [];
                }
            },
            //====  层级
            treeLayer: {
                type: Number,
                request: false,
                default: 1
            }
        },
        data() {
            return {
                treeArray: this.treeData
            }
        },
        methods: {
            //==== 传递数据
            clickNode: function (treeNode) {
                this.$emit('clickNode', treeNode);
            },
            //==== 子节点被点击
            clickChildren: function (treeNode) {
                this.$emit('clickNode', treeNode);
            },
            //点击icon
            clickIcon: function (treeNode) {
                this.$emit('clickIcon', treeNode);
            },
            openTree: function (isopen = true) {
                return isopen;
            }
        },
        watch: {
            treeData: function () {
                this.treeArray = this.treeData;
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .node
        cursor: pointer
        user-select: none
        height: 30px;
        line-height: 30px;
        color: #eaeaea;
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        position relative

    .treeRightIcon
        position: absolute;
        top: 0px;
        right: 4px;

    .nodeText
        display inline-block
        margin-left: 5px;

    .nodeContent
        background: #3f4552

        &:not(.haveChild)
            &:hover
                background #606a80;

    .haveChild
        background: #2b313e

    .active
        background: #445e98;


</style>
