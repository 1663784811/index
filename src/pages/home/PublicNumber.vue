<template>
    <div class="going">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <div class="container">
            <div class="imgBox">
                <img src="~@/assets/common/img/weixin.jpg" alt="">
            </div>
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
    .imgBox
        width: 258px;
        margin: 150px auto;
</style>
