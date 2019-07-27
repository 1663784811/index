<template>
    <div class="clear_f baseListBox">
        <div class="checkboxDiv">
            <template v-if="treeArrayData.length >0">
                <Tree :data="treeArrayData"></Tree>
            </template>
            <template v-else>
                <p class="noDate">暂无数据</p>
            </template>
        </div>
    </div>
</template>
<script>
    import {CREATETREESTRUCTURE} from '@/assets/common/js/global.js';

    export default {
        name: "BaseTreeCheckbox",
        props: {
            ajaxObj: {
                type: Function
            }
        },
        data() {
            return {
                treeData: [],  //树原数据
            }
        },
        methods: {
            checkChange: function () {
                let td = this.$refs.treeRef.getCheckedAndIndeterminateNodes();
                this.$emit("changeSelect", td);
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
            },
            getTreeData: function () {
                return this.treeData;
            }
        },
        computed: {
            treeArrayData: function () {
                let newArr = [];
                let treeData = this.treeData;
                for (let i = 0; i < treeData.length; i++) {
                    newArr.push(this.createTreeJson(treeData[i]));
                }
                let tree = CREATETREESTRUCTURE(newArr);
                return tree ? tree : [];
            }
        }
    }
</script>

<style scoped lang="stylus">
    .baseListBox
        height: calc(100% - 30px);
        overflow: auto;

        .contentLi
            padding: 6px 26px;
            position: relative;
            background: #fff

            &:nth-child(2n)
                background: #f3f3f3;

            &:hover
                background: #eee

            &:nth-child(1)
                .num
                    font-weight: bold;
                    color: #ed4014;

            &:nth-child(2)
                .num
                    font-weight: bold;
                    color: #ff9900;

            &:nth-child(3)
                .num
                    font-weight: bold;
                    color: #19be6b;

            .num
                position: absolute
                top: 6px;
                left: 6px;

            .delBtn
                position: absolute;
                top: 6px;
                right: 16px;
                cursor: pointer;

    .noData
        padding: 20px 0;
        text-align: center;

    .checkboxDiv
        padding: 20px;

        .noDate
            text-align: center;
</style>
