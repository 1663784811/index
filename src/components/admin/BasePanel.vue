<template>

    <div class="basePanel">
        <!--===================   基础面板     ============-->
        <h3 class="basePanelTitle textOne" v-if="title">
            {{title}}
            <slot name="titleRight"></slot>
        </h3>
        <div class="basePanelContent scroll" :class="{notTitle:!title}">
            <slot></slot>
        </div>

    </div>

</template>

<script>
    export default {
        name: "BasePanel",
        props: {
            title: {
                type: String
            }
        },
        data() {
            return {};
        }
    }
</script>

<style lang="stylus" scoped>
    .basePanel
        height: 100%;
        position: relative;

        .basePanelTitle
            font-size: 12px;
            text-align: center;
            background: #252a2f;
            height: 30px;
            line-height: 30px;
            color: #fff;
            font-weight: normal;
            position: relative;

            .titleRight
                position: absolute;
                top: 0;
                right: 10px;


        .basePanelContent
            height: calc(100% - 30px);

        .notTitle
            height: 100%;

</style>
