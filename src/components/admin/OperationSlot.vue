<template>
    <div class="operationBox clear_f">
        <!--==========         基本操作        ==========-->
        <div class="operationLeft">
            <slot name="button"></slot>
        </div>
        <div class="operationRight">
            <Input v-model="searchData">
                <Select v-model="selectValue" slot="prepend" style="width: 80px">
                    <Option v-for="(item,index)  in searchWhere" :key="index" :value="item.keyStr">{{item.name}}</Option>
                </Select>
                <Button slot="append" icon="ios-search" @click="clickSearchBtn"></Button>
            </Input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OperationSlot",
        props: {
            searchWhere: {
                type: Array,
                request: false,
                default() {
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
