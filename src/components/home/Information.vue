<template>
    <div class="information">
        <div class="informationContainer container">
            <div class="informationTitle">
                <h2 class="textOne">{{title}}</h2>
            </div>
            <div class="informationContent" v-if="content!==''">
                <p>{{content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Information",
        props: {
            title: {
                type: String,
                default() {
                    return "";
                }
            },
            content: {
                type: String,
                default() {
                    return "";
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    .informationContainer
        padding: 80px 0;

        .informationTitle
            width: 740px;
            margin: auto;

            h2
                text-align: center;
                font-size: 38px;
                padding: 40px 0;
                color: #202020;
                font-weight: normal;

        .informationContent
            width: 740px;
            margin: auto;

            p
                text-align: center;
                font-size: 14px;
                color: #8d8d8d;
                line-height: 36px;

</style>
