<template>
    <div class="header">
        <div class="headerBox">
            <div class="headerContainer clear_f">
                <div class="headerLeftr f_left">
                    <ul class="clear_f">
                        <li class="f_left">
                            <router-link to="/"><h1 class="logo">听心</h1></router-link>
                        </li>
                    </ul>
                </div>
                <div class="headerRight f_right">
                    <ul class="clear_f">
                        <li class="f_left userli" :class="{active :( $route.path==='/' || $route.path==='/index' )}">
                            <router-link to="index">首页</router-link>
                        </li>
                        <li class="f_left userli" :class="{active : $route.path==='/cases' }">
                            <router-link to="cases">个人作品</router-link>
                        </li>
                        <li class="f_left userli" :class="{active : $route.path==='/map' }">
                            <router-link to="map">地图</router-link>
                        </li>
                        <li class="f_left userli" :class="{active : $route.path==='/statistics' }">
                            <router-link to="statistics">统计</router-link>
                        </li>
                        <li class="f_left userli" :class="{active : $route.path==='/about' }">
                            <router-link to="about">关于我们</router-link>
                        </li>
                        <li class="f_left userli" style="">
                            <router-link to="/">
                                <Avatar icon="ios-person" size="large"/>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "HomeHeader",
        mounted() {
        }
    }
</script>

<style scoped lang="stylus">
    .header
        width: 100%;
        height: 70px;
        min-width: 1000px;


        .headerBox
            position: fixed;
            top: 0;
            left: 0;
            right 0;
            height: 70px;
            z-index: 10;
            background: #fff;
            box-shadow: 2px 2px 2px #eaeaea;

        .headerContainer
            max-width: 1200px;
            margin: auto

            .logo
                background: url("~@/assets/common/img/logo.png") no-repeat;
                background-size: 100% auto;
                text-indent: -9999px;
                height: 55px;
                width: 55px;
                background-position: bottom;
                margin-top: 6px;

            .navli
                a
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 20px;
                    font-size: 16px;

                a:hover
                    background: #000;

        .headerRight
            .userli
                a
                    height: 68px;
                    line-height: 68px;
                    display: block;
                    padding: 0 20px;
                    font-size: 14px;
                    color: #181818

                &.active
                    border-bottom: 2px solid #22ac38
</style>
