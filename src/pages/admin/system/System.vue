<template>
    <div class="currencyTabBox">
        <ul class="cardBox clear_f">
            <li class="cardBoxLi">
                <Card style="height: 250px">
                    <p slot="title">基础操作</p>
                    <p>是否开启注册：是</p>
                    <p>是否开启注册：是</p>
                    <p>是否开启注册：是</p>
                    <p>是否开启注册：是</p>
                </Card>
            </li>
            <li class="cardBoxLi">
                <Card style="height: 250px">
                    <p slot="title">操作系统信息</p>
                    <p>操作系统：linux</p>
                    <p>CPU：Inter I9 7300</p>
                    <p>内存：4GB</p>
                    <p>硬盘：1T</p>
                </Card>
            </li>
            <li class="cardBoxLi">
                <Card style="height: 250px">
                    <p slot="title">数据库信息</p>
                    <p>数据库：mysql</p>
                    <p>版本：mysql_5.8</p>
                    <p>当前数据：flySandy</p>
                    <p>当前用户：root</p>
                    <p>字符集:UTF-8</p>
                    <p>IP地址:0.0.0.0</p>
                </Card>
            </li>
            <li class="cardBoxLi">
                <Card style="height: 250px">
                    <p slot="title">web服务器</p>
                    <p>服务器:tomcat</p>
                    <p>版本:8.5</p>
                    <p>IP地址:0.0.0.0</p>
                    <p>服务器:tomcat</p>
                </Card>
            </li>
        </ul>

    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import BaseOperation from '@/components/admin/BaseOperation';
    import BaseWindow from '@/components/admin/BaseWindow';

    export default {
        name: "System",
        components: {
            BaseOperation,
            BaseWindow
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .currencyTabBox
        padding 0px;
        height 100%
        overflow: auto;

        .cardBox
            padding: 20px;

            .cardBoxLi
                padding-right: 20px;
                padding-bottom: 20px;
                float: left;
                width: 50%;

    @media screen and (max-width: 1200px)
        .currencyTabBox
            .cardBox
                .cardBoxLi
                    width: 100%;
</style>
