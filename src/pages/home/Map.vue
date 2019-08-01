<template>
    <div class="map">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <div class="container">
            <h2 class="title">百度地图</h2>
            <div id="baiduMap" style="height: 600px;margin-bottom: 100px;"></div>
            <h2 class="title">高德地图</h2>
            <div id="aMap" style="height: 600px;;margin-bottom: 100px;"></div>
            <h2 class="title">腾讯地图</h2>
            <div id="tMap" style="height: 600px;;margin-bottom: 200px;"></div>
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
        name: "Map",
        components: {
            HomeHeader,
            HomeFooter,
            Information,
            ThreeCell
        },
        mounted() {
            //百度地图
            var map = new BMap.Map("baiduMap");
            var point = new BMap.Point(113.258331, 23.13956);
            map.centerAndZoom(point, 9);

            var aMap = new AMap.Map('aMap');

            var tMap = new qq.maps.Map(document.getElementById("tMap"), {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(23.134046, 113.248444)
            });
            tMap.zoomTo(9);

        },
        methods: {}

    }
</script>

<style scoped lang="stylus">
    .title
        text-align: center;
        padding: 20px;
        font-size: 18px;
</style>
