<template>
    <div class="operationBox clear_f">
        <!--==========         基本操作        ==========-->
        <div class="operationLeft">
            <Button type="success" size="small" icon="ios-add-circle-outline" @click="clickAddBtn">新增</Button>
            <Button type="warning" size="small" icon="ios-brush-outline" @click="clickUpdateBtn">修改</Button>
            <Button type="error" size="small" icon="ios-trash-outline" @click="clickDelBtn">删除</Button>
            <slot name="button"></slot>
        </div>
        <div class="operationRight">
            <Input v-model="searchData">
                <Select v-model="selectValue" slot="prepend" style="width: 80px">
                    <Option v-for="item  in searchWhere" :value="item.keyStr">{{item.name}}</Option>
                </Select>
                <Button slot="append" icon="ios-search" @click="clickSearchBtn"></Button>
            </Input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseOperation",
        props: {
            searchWhere: {
                type: Array,
                request: false,
                default() {
                    //{name: "sss", keyStr: 1}, {name: "dddd", keyStr: 2}
                    return [];
                }
            }
        },
        data() {
            return {
                selectValue: "",
                searchData: ""
            }
        },
        watch: {
            selectValue: function () {
                this.$emit("changeSearchBtn", {selectValue: this.selectValue, searchData: this.searchData});
            },
            searchData: function () {
                this.$emit("changeSearchBtn", {selectValue: this.selectValue, searchData: this.searchData});
            }
        },
        methods: {
            //====  点击了添加按钮
            clickAddBtn: function () {
                this.$emit('clickAddBtn');
            },
            //======   点击更新按钮
            clickUpdateBtn: function () {
                this.$emit('clickUpdateBtn');
            },
            //======   点击删除按钮
            clickDelBtn: function () {
                this.$emit('clickDelBtn');
            },
            //======    点击搜索按钮
            clickSearchBtn: function () {
                this.$emit('clickSearchBtn', {selectValue: this.selectValue, searchData: this.searchData});
            }
        }
    }
</script>

<style scoped lang="stylus">
    .operationBox
        padding 10px

        .operationLeft
            float: left;

            button
                margin-right: 10px

        .operationRight
            float: right

</style>
