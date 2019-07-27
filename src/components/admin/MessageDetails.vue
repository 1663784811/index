<template>
    <div class="messageDetails">
        <div class="detailsTop">
            <h1 class="textOne">{{article.title}}</h1>
            <p class="articleInfo"><span>作者:{{article.author}}</span><span>时间:{{article.time}}</span></p>
        </div>
        <div class="detailsContent w-e-text" v-html="article.content"></div>
    </div>
</template>

<script>
    import E from 'wangeditor'

    export default {
        name: "MessageDetails",
        props: {
            articleData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                article: this.articleData,
            }
        },
        watch: {
            articleData: function () {
                this.article = this.articleData;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .messageDetails
        .detailsTop
            padding: 10px 0;
            text-align: center;

            h1
                font-size: 16px;
                color: #333;

            .articleInfo
                padding: 10px;

                span
                    margin: 0 12px;
                    font-size: 12px;

        .detailsContent
            overflow: auto;
            width: 100%;
            padding: 0 20px;

</style>
