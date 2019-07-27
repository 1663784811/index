<template>
    <div class="adminTopLeft">
        <ul class="clear_f adminTopLeftUl">
            <li class="f_left">
                <router-link to="">
                    <div class="logBox">
                        <h1 class="logoTitle">听心后台管理系统</h1>
                        <p class="logoen">See before you meet</p>
                    </div>
                </router-link>
            </li>
            <!--<li class="f_left">-->
            <!--<router-link to="/bar">-->
            <!--<h1 class="logo"><img src="../../assets/logo.png" alt=""></h1>-->
            <!--</router-link>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AdminHeaderLeft"
    }
</script>

<style scoped lang="stylus">

    .adminTopLeft
        float: left;

        .adminTopLeftUl
            margin-left: 10px;

            .logBox
                height: 50px;
                padding-top: 6px;

                .logoTitle
                    font-size: 14px;
                    color: #ccc;
                    letter-spacing: 4px;

                .logoen
                    font-size: 12px;
                    color: #ccc;
                    word-spacing: 10px;

</style>
