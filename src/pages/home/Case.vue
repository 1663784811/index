<template>

    <div class="about">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <!--========    图片   ==========-->
        <div class="pic">
            <img src="../../assets/hom/img/banner1.png" alt="">
        </div>
        <ThreeCell class="threeCell"
                   :title="infoTitle"
                   :colData="colData" height="288px"
                   imgBoxStyle="padding:50px 10px"></ThreeCell>
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
                infoTitle: "个人作品",
                colData: [
                    {
                        img: "/img/shop.png",
                        title: "购物商城",
                        introduction: "供网上购物的平台，消费者可以在网上寻找自己想要的商品，然后进行网上购买，网上支付。",
                        to: "http://s.cyyaw.cn"
                    },
                    {
                        img: "/img/app.png",
                        title: "购物app",
                        introduction: "移动互联网时代是全民的移动互联网时代，是每个人的时代，也是每个企业的时代。APP便捷了每个人的生活。",
                        to: "/going"
                    },
                    {
                        img: "/img/s.png",
                        title: "小程序",
                        introduction: "一种新的开放能力，可以在微信内被便捷地获取和传播，同时具有出色的使用体验。",
                        to: "/going"
                    },
                    {
                        img: "/img/weixinservice.png",
                        title: "微信公众号",
                        introduction: "给企业和组织提供更强大的业务服务与用户管理能力，帮助企业快速实现全新的公众号服务平台。",
                        to: "/publicNumber"
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
            max-width: 1920px;
            min-width: 1200px;
            margin: auto;

        .threeCell
            margin: 50px 0 150px 0;

</style>
