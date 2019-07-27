<template>
    <Checkbox
            :indeterminate="indeterminateFn(treeNode)"
            :value="isSelect"
            @on-change="changeCheckbox"
    >&nbsp;
    </Checkbox>
</template>

<script>
    export default {
        name: "TreeCheckbox",
        props: {
            treeNode: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isSelect: this.treeNode.isSelect
            }
        },
        methods: {
            indeterminateFn: function (treeNode) {
                if (treeNode.children && treeNode.children.length > 0) {
                    let children = treeNode.children;
                    for (let i = 0; i < children.length; i++) {
                        if (!children[i].isSelect) {
                            return true;
                        }
                    }
                }
                return false;
            },
            changeCheckbox: function (isSelect) {
            },
        },
        watch: {
            treeNode: function () {
                this.isSelect = this.treeNode.isSelect;
            }
        }
    }
</script>

<style scoped>

</style>
