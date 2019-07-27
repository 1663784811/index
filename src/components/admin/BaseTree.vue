<template>
    <!--==============   基础树  =============-->
    <CollapseTransition>
        <ul v-if="treeData.length">
            <li v-for="treeNode in treeData" :key="treeNode.id">
                <div class="node">
                    <div class="nodeContent"
                         :class="{haveChild:treeNode.children}"
                         @click.stop.prevent="clickNode(treeNode.data)"
                         :style="{paddingLeft : treeLayer * 10 +'px' }"
                    >
                        <Icon v-if="treeNode.children" :type="treeNode.iconType||'ios-folder-open'"/>
                        <Icon v-else="treeNode.children" :type="treeNode.iconType||'md-list-box'"/>
                        <span class="nodeText">{{ treeNode.name }}</span>
                    </div>
                    <span
                            v-if="treeNode.children"
                            class="treeRightIcon"
                            @click="treeNode.isOpenTree=!treeNode.isOpenTree"
                    >
                         <Icon :type="treeNode.isOpenTree ? 'md-arrow-dropdown':'md-arrow-dropright'"/>
                    </span>
                </div>
                <AdminLeftTree ref="treeUlRef"
                               v-show="treeNode.isOpenTree"
                               :treeData="treeNode.children"
                               :treeLayer="treeLayer+1"
                               @clickNode="clickChildren"
                >
                </AdminLeftTree>
            </li>
        </ul>
    </CollapseTransition>
</template>

<script>

    import CollapseTransition from '@/assets/common/js/collapseTransition.js';


    export default {
        name: "AdminLeftTree",
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
            return {}
        },
        methods: {
            //==== 传递数据
            clickNode: function (treeNode) {
                this.$emit('clickNode', treeNode);
            },
            //==== 子节点被点击
            clickChildren: function (treeNode) {
                this.$emit('clickNode', treeNode);
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
        color: #333;
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        position relative

    .node:hover
        background #d8d8d8;

    .treeRightIcon
        position: absolute;
        top: 0px;
        right: 4px;


    .nodeText
        display inline-block
        margin-left: 5px;

    .haveChild
        background: #eee


</style>
