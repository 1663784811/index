<template>
    <div class="h5">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <div class="container">
            <h2 class="title">H5 页面</h2>
            <ul class="clear_f h5ul">
                <li class="f_left h5li" v-for="(box,index) in showArr" :key="index">
                    <div class="h5Box">
                        <div class="erCode">
                            <div class="erCodeBox" v-html="box.svg"></div>
                            <img :src="box.img" alt="">
                        </div>
                        <h2 class="h5title textOne">
                            {{box.text}}
                        </h2>
                    </div>
                </li>
            </ul>
        </div>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>

    import HomeHeader from '@/components/home/HomeHeader';
    import Information from '@/components/home/Information';
    import HomeFooter from '@/components/home/HomeFooter';
    import ThreeCell from '@/components/home/ThreeCell';
    import QRCode from 'qrcode';

    export default {
        name: "H5",
        components: {
            HomeHeader,
            HomeFooter,
            Information,
            ThreeCell
        },
        data() {
            return {
                BoxArr: [
                    {
                        text: '游戏:大转盘',
                        img: '/img/shop.png',
                        url: "http://h5.cyyaw.cn/turntable"
                    },
                    {
                        text: '游戏:砸金蛋',
                        img: '/img/shop.png',
                        url: "https://www.hao123.com/"
                    }
                ]
            }
        },
        methods: {},
        computed: {
            showArr: function () {
                let arr = [];
                for (let i = 0; i < this.BoxArr.length; i++) {
                    let svg = '';
                    QRCode.toString(this.BoxArr[i].url, function (err, string) {
                        if (err) throw err;
                        svg = string;
                    });
                    let j = {
                        svg: svg,
                        text: this.BoxArr[i].text,
                        img: this.BoxArr[i].img
                    };
                    arr.push(j);
                }
                return arr;
            }
        }

    }
</script>

<style scoped lang="stylus">
    .title
        text-align: center;
        padding: 20px;
        font-size: 18px;
        margin-top: 40px;

    .h5ul
        margin: 20px 0;
        margin-right: -20px;

        .h5li
            border: 1px solid #eee;
            width: 285px;
            height: 326px;
            overflow: hidden;
            margin-right: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            cursor: pointer;

            .erCode
                text-align: center;
                padding: 20px;
                height: 283px;
                overflow: hidden;
                position: relative;

                img
                    max-width: 100%;
                    max-height: 100%;

                .erCodeBox
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    right: 20px;
                    bottom: 20px;
                    background: #eee;
                    display: none;

                svg
                    width: 100%;
                    height: 100%;

            &:hover
                .erCodeBox
                    display: block;

            .h5title
                padding: 0 20px 20px 20px;
                font-size: 14px;
                text-align: center;


</style>
