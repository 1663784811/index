<template>
    <div class="checkboxDiv">
        <template v-if="treeArrayData.length >0">
            <Tree :data="treeArrayData" show-checkbox ref="treeRef" @on-check-change="checkChange"></Tree>
        </template>
        <template v-else>
            <p class="noDate">暂无数据</p>
        </template>
    </div>
</template>
<script>
    import {AJAXGET, CREATETREESTRUCTURE} from '@/assets/common/js/global.js';

    export default {
        name: "TreeCheckbox",
        props: {
            url: {
                type: String,
                default() {
                    return "";
                }
            },
            value: {
                type: [Array],
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                treeData: [],  //树原数据
                setValueData: this.value,  // 下标数组
            }
        },
        methods: {
            checkChange: function () {
                let td = this.$refs.treeRef.getCheckedAndIndeterminateNodes();
                this.$emit("changeSelect", td);
            },
            createTreeJson: function (original) {
                let isselect = this.setValueData.indexOf(original.tid) !== -1;
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
            }
        },
        created() {
            if (this.url !== "") {
                AJAXGET(this.url, {}).then(res => {
                    this.treeData = res;
                });
            }
        },
        watch: {
            url: function () {
                if (this.url !== "") {
                    AJAXGET(this.url, {}).then(res => {
                        this.treeData = res;
                    });
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
