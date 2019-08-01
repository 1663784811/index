<template>
    <div class="statistics">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <div class="container">
            fdf

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
        name: "Statistics",
        components: {
            HomeHeader,
            HomeFooter,
            Information,
            ThreeCell
        },
        mount() {

        },
        methods: {}
    }
</script>

<style scoped lang="stylus">

</style>
