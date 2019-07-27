<template>

    <div class="homeFooter">
        <div class="container">
            <ul class="clear_f footerUl">
                <li class="f_left footerCol">
                    <div class="footerColBox">
                        <p class="titleP">关于我们</p>
                        <p class="rowP">
                            <a href="">首页</a>
                        </p>
                        <p class="rowP">
                            <a href="">案例</a>
                        </p>
                        <p class="rowP">
                            <a href="">解决方案</a>
                        </p>
                        <p class="rowP">
                            <a href="">学习交流</a>
                        </p>
                    </div>
                </li>
                <li class="f_left footerCol">
                    <div class="footerColBox">
                        <p class="titleP">联系我们</p>
                        <p class="rowP">
                            <span class="infoName">邮箱：</span>
                            <span class="inforContent">1663784811@qq.com</span>
                        </p>
                        <p class="rowP">
                            <span class="infoName">电话：</span>
                            <span class="inforContent">18819617231</span>
                        </p>
                        <p class="rowP">
                            <span class="infoName">地址：</span>
                            <span class="inforContent">广州</span>
                        </p>
                    </div>
                </li>
                <li class="f_left footerCol clear_f">
                    <div class="weixinBox weiBox f_left">
                        <div class="imgBox">
                            <img src="../../assets/common/img/weixin.jpg" alt="">
                        </div>
                        <p>微信公众号</p>
                    </div>
                    <div class="weiboBox weiBox f_left">
                        <div class="imgBox">
                            <img src="../../assets/common/img/weibo.png" alt="">
                        </div>
                        <p>微博</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="container">
            <div class="footerNote">
                <p class="footNoteP">
                    本网站是学习交流、个人作品展示为目的，不涉及任何的商业用途或盈利目的
                </p>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "HomeFooter"
    }
</script>

<style scoped lang="stylus">

    .homeFooter
        background: #222D35;
        min-width: 1200px;

        .footerUl
            .footerCol
                width: 33.3%;

                .weiBox
                    width: 50%;
                    margin-top: 100px

                    .imgBox
                        width: 100px;
                        height 100px;
                        margin: auto;
                        background: red

                        img
                            width: 100%;
                            height: 100%;

                    p
                        text-align: center;
                        margin: 10px auto;
                        color: #b9b9b9;
                        font-size: 12px;

                .footerColBox
                    margin-top: 50px;

                    .titleP
                        padding: 20px 0;
                        color: #b9b9b9;
                        font-size: 18px;

                    .rowP
                        font-size: 14px;
                        color: #b9b9b9;
                        padding-bottom: 10px;

                        a
                            color: #b9b9b9;
                            font-size: 14px;

        .footerNote
            .footNoteP
                text-align: center;
                font-size: 12px;
                color: #b9b9b9;
                width: 550px;
                margin: 40px auto;

</style>
