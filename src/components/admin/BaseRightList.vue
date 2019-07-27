<template>
    <div class="baseRightList">
        <h3 class="rightTitle">{{title}}</h3>
        <ul class="clear_f baseListBox">
            <li class="contentLi textOne" v-for="(item ,key) in listData">
                <span class="num">{{key+1}}</span>
                <span class="contentText">{{item.name}}</span>
                <span class="delBtn" @click="clickDelBtn(item)">
                    <Icon type="ios-trash-outline"/>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BaseRightList",
        props: {
            title: {
                type: String
            },
            listData: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            clickDelBtn: function (item) {
                this.$emit("clickDelBtn", item);
            }
        }
    }
</script>

<style scoped lang="stylus">
    .baseRightList
        position: relative;
        height: 100%;

        .rightTitle
            font-size: 12px;
            text-align: center;
            background: #8a8a8a;
            height: 30px;
            line-height: 30px;
            color: #fff;
            font-weight: normal;

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


</style>
