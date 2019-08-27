<template>
    <div class="home">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <div class="codeBox">
            <div class="container">
                <div class="clear_f">
                    <div class="f_left">
                        <Input>
                            <span slot="prepend">地址:</span>
                        </Input>
                    </div>
                    <div class="f_left">
                        <Input>
                            <span slot="prepend">端口:</span>
                        </Input>
                    </div>
                    <div class="f_left">
                        <Input>
                            <span slot="prepend">数据库</span>
                        </Input>
                    </div>
                    <div class="f_left">
                        <Input>
                            <span slot="prepend">用户名</span>
                        </Input>
                    </div>
                    <div class="f_left">
                        <Input>
                            <span slot="prepend">密码</span>
                        </Input>
                    </div>

                </div>

            </div>
        </div>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>

    import HomeHeader from '@/components/home/HomeHeader';
    import HomeFooter from '@/components/home/HomeFooter';

    export default {
        name: "Code",
        components: {
            HomeHeader,
            HomeFooter
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style scoped lang="stylus">
    .codeBox
        min-height: 500px;


</style>
