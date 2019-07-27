<template>
    <div class="threeCell">
        <div class="container">
            <h2 class="title" v-if="title">{{title}}</h2>
            <Row :gutter="16">
                <Col span="6" v-for="(data, index) in dataArr" :key="index">
                    <div class="cellBox" :style="{height:height}">
                        <template v-if="data.to">
                            <a :href="data.to" target="_blank">
                                <div class="imgBox" :style="imgBoxStyle">
                                    <img :src="data.img">
                                </div>
                            </a>
                        </template>
                        <div v-else class="imgBox" :style="imgBoxStyle">
                            <img :src="data.img">
                        </div>
                        <div class="textBox">
                            <p class="titleP textOne" :title="data.title">{{data.title}}</p>
                            <p class="introduction" :title="data.introduction">{{data.introduction}}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ThreeCell",
        props: {
            colData: {
                type: Array,
                default() {
                    return [];
                }
            },
            title: {
                type: String
            },
            height: {
                type: String,
                default() {
                    return 'auto';
                }
            },
            imgBoxStyle: {
                type: String,
                default() {
                    return "";
                }
            }
        },
        data() {
            return {
                dataArr: this.colData
            }
        },
        watch: {
            colData: function () {
                this.dataArr = this.colData;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .title
        text-align: center;
        padding: 50px 0;
        font-size: 30px;

    .cellBox
        border: 1px solid #eee;
        margin-bottom: 20px;
        box-shadow: 0 0 4px #b5b5b5;
        overflow: hidden;

        .imgBox
            padding: 10px;
            text-align: center;

        .titleP
            padding: 0 10px;
            font-size: 14px;
            text-align: center;
            color: #222;

        .introduction
            padding: 10px;
            text-align: center;
            color: #8d8d8d

</style>
