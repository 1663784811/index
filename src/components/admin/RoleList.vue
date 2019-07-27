<template>
    <ul class="clear_f baseListBox">
        <template v-if="setlistData.length>0">
            <li class="contentLi textOne" v-for="(item ,key) in setlistData">
                <span class="num">{{key+1}}</span>
                <span class="contentText">{{item[keyName]}}</span>
                <span class="powerBtn" @click="clickRoleBtn(item)"><Icon type="md-build"/></span>
                <span class="delBtn" @click="clickDelBtn(item)"><Icon type="ios-trash-outline"/></span>
            </li>
        </template>
        <p v-else class="noData">暂无数据</p>
    </ul>
</template>

<script>
    export default {
        name: "BaseList",
        props: {
            title: {
                type: String
            },
            listData: {
                type: Array,
                default() {
                    return [];
                }
            },
            keyName: {
                type: String,
                default() {
                    return "name";
                }
            }
        },
        data() {
            return {
                setlistData: this.listData
            }
        },
        methods: {
            clickDelBtn: function (item) {
                this.$emit("clickDelBtn", item);
            },
            clickRoleBtn: function (item) {
                this.$emit("clickRoleBtn", item);
            }
        },

        watch: {
            listData: function () {
                this.setlistData = this.listData;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .baseListBox
        height: calc(100% - 30px);
        overflow: auto;

        .contentLi
            padding: 6px 54px 6px 26px;
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

            .powerBtn
                position: absolute;
                top: 6px;
                right: 40px;
                cursor: pointer;

                &:hover
                    color: #ff9d09


            .delBtn
                position: absolute;
                top: 6px;
                right: 16px;
                cursor: pointer;

                &:hover
                    color: #ed4014;

    .noData
        padding: 20px 0;
        text-align: center;

</style>
