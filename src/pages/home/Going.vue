<template>
    <div class="going">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>


        <div class="container">
            <p class="iconP">
                <Icon type="ios-alert"/>
            </p>
            <h2 class="title">
                功能正在努力开发中。。。敬请期待！
            </h2>

        </div>


        <HomeFooter></HomeFooter>
    </div>
</template>

<script>

    import HomeHeader from '@/components/home/HomeHeader';
    import Information from '@/components/home/Information';
    import HomeFooter from '@/components/home/HomeFooter';
    import ThreeCell from '@/components/home/ThreeCell';


    export default {
        name: "Going",
        components: {
            HomeHeader,
            HomeFooter,
            Information,
            ThreeCell
        },
    }
</script>

<style scoped lang="stylus">
    .title
        text-align: center;
        padding: 20px;
        font-size: 20px;
        margin-bottom: 250px;

    .iconP
        margin-top: 150px;
        text-align: center;
        font-size: 60px;
        color: #ff9900;
</style>
