<template>

    <div class="about">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <!--========    图片   ==========-->
        <div class="pic">
            <img src="../../assets/hom/img/banner3.png" alt="">
        </div>
        <Information :title="infoTitle" :content="infoContent"></Information>
        <!--========   九宫格  =======-->
        <ThreeCell class="threeCell" :colData="colData" height="288px" imgBoxStyle="padding:50px 10px"></ThreeCell>
        <!--=======     脚部   ==========-->
        <HomeFooter></HomeFooter>
    </div>

</template>

<script>

    import HomeHeader from '@/components/home/HomeHeader';
    import Information from '@/components/home/Information';
    import HomeFooter from '@/components/home/HomeFooter';
    import ThreeCell from '@/components/home/ThreeCell';

    export default {
        name: "About",
        components: {
            HomeHeader,
            HomeFooter,
            Information,
            ThreeCell
        },
        data() {
            return {
                infoTitle: "Who are we?",
                infoContent: "我们是谁？我们是最热心于计算机技术、擅长IT技术、计算机编程。专精于提供高品质互联网技术开发服务，提供专业的和高标准的互联网产品设计开发方案。",
                value1: 0,
                colData: [
                    {
                        img: "/img/weixinservice.png",
                        title: "服务号开发",
                        introduction: "给企业和组织提供更强大的业务服务与用户管理能力，帮助企业快速实现全新的公众号服务平台。"
                    },
                    {
                        img: "/img/weixinsubscribe.png",
                        title: "订阅号开发",
                        introduction: "为媒体和个人提供一种新的信息传播方式，构建与读者之间更好的沟通与管理模式。"
                    },
                    {
                        img: "/img/weixinapp.png",
                        title: "小程序开发",
                        introduction: "一种新的开放能力，可以在微信内被便捷地获取和传播，同时具有出色的使用体验。"
                    },
                    {
                        img: "/img/weixinpay.png",
                        title: "微信支付",
                        introduction: "微信支付 - 中国领先的第三方支付平台 ｜ 微信支付提供安全快捷的支付方式"
                    },
                ]
            }
        },
    }
</script>

<style scoped lang="stylus">
    .about
        .pic
            text-align: center;
            min-width: 1200px;
            max-width: 1920px;
            margin: auto;

        .threeCell
            margin-bottom: 150px;

</style>
