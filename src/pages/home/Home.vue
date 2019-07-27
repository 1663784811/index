<template>
    <div class="home">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <!--========    轮播   ==========-->
        <Carousel style="min-width: 1200px" v-model="value1" loop :autoplay="autoplay" :autoplay-speed="autoplaySpeed">
            <CarouselItem>
                <div class="demo-carousel" style="background: #e7e7e7">
                    <a href="">
                        <img src="~@/assets/hom/img/banner1.png"/>
                    </a>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel" style="background: #e7e7e7">
                    <a href="">
                        <img src="~@/assets/hom/img/banner2.png"/>
                    </a>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel" style="background: #e7e7e7">
                    <a href="">
                        <img src="~@/assets/hom/img/banner3.png"/>
                    </a>
                </div>
            </CarouselItem>
        </Carousel>
        <!--========    通知    ==========-->
        <Information :title="infoTitle" :content="infoContent"></Information>
        <!--========   文章  =======-->
        <ArticleBox></ArticleBox>
        <!--========   学习交流  =======-->
        <IndexStudy></IndexStudy>
        <!--========    通知    ==========-->
        <Information :title="wxinfoTitle" :content="wxinfoContent"></Information>
        <!--========   九宫格  =======-->
        <ThreeCell :colData="colData" height="288px" imgBoxStyle="padding:50px 10px"></ThreeCell>
        <!--=======     脚部   ==========-->
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>

    import HomeHeader from '@/components/home/HomeHeader';
    import Information from '@/components/home/Information';
    import ArticleBox from '@/components/home/ArticleBox';
    import IndexStudy from '@/components/home/IndexStudy';
    import HomeFooter from '@/components/home/HomeFooter';
    import ThreeCell from '@/components/home/ThreeCell';

    export default {
        name: "Home",
        components: {
            HomeHeader,
            Information,
            ArticleBox,
            IndexStudy,
            HomeFooter,
            ThreeCell
        },
        data() {
            return {
                autoplay: true,
                autoplaySpeed: 3000,
                infoTitle: "服务器集群、秒杀、缓存技术",
                infoContent: "一个台服务器的力量很有限，但是一群服务器的力量是无限的，满足高并发的需求。秒杀再也不宕机",
                wxinfoTitle: "服务号、订阅号、小程序、微信支付 开发",
                wxinfoContent: "为媒体和个人提供一种新的信息传播方式，构建与读者之间更好的沟通与管理模式。一种新的开放能力，可以在微信内被便捷地获取和传播，同时具有出色的使用体验。",
                value1: 0,
                colData: [
                    {
                        img: "/img/weixinservice.png",
                        title: "服务号",
                        introduction: "服务号开发"
                    },
                    {
                        img: "/img/weixinsubscribe.png",
                        title: "订阅号",
                        introduction: "订阅号开发"
                    },
                    {
                        img: "/img/weixinapp.png",
                        title: "小程序",
                        introduction: "小程序开发"
                    },
                    {
                        img: "/img/weixinpay.png",
                        title: "微信支付",
                        introduction: "微信支付开发"
                    },
                ]
            }
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style scoped lang="stylus">
    .demo-carousel
        min-height: 100px;
        text-align: center;


</style>
