<template>
    <div class="baseLableBox" :style="{background:bgColer}">
        <!--=================      基础标签组件         ============-->
        <div class="leftIconBox" :style="{background:iconBgColer}">
            <slot name="icon">
                <Icon type="ios-home"/>
            </slot>
        </div>
        <div class="rightTextBox">
            <p class="textNum textOne">
                {{textNum}}
            </p>
            <p class="textNote textOne">
                {{textNote}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseLableBox",
        props: {
            textNum: {
                default: 0
            },
            textNote: {
                type: String,
                default: ""
            },
            bgColer: {
                type: String
            },
            iconBgColer: {
                type: String
            }
        }
    }
</script>

<style scoped lang="stylus">
    .baseLableBox
        background: #fff;
        border: 1px solid #eee;
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        height: 100px;

        .leftIconBox
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 40%;
            padding: 18px 15px;
            background: #5cb85c;
            text-align: center;
            color: #f9f9f9;
            font-size: 36px;

        .rightTextBox
            display: inline-block;
            margin-left: 40%;
            width: 60%;
            height: 100%;
            text-align: center;

            .textNum
                font-size: 20px;
                padding: 24px 0 10px 0;
                font-weight: bold

            .textNote
                font-size: 12px;

</style>
