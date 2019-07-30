<template>
    <div class="loginPage">
        <div class="container">
            <div class="loginRight">
                <h1 class="loginTitle">听心后台管理系统</h1>
                <div class="loginBox">
                    <div class="inputRow">
                        <Input size="default" v-model="loginData.account" suffix="ios-contact" placeholder="用户名"/>
                    </div>
                    <div class="inputRow">
                        <Input size="default" v-model="loginData.password" suffix="ios-key" type="password"
                               placeholder="密码"/>
                    </div>
                    <div class="inputRow">
                        <Button size="default" type="success" long :loading="loginLoding" @click="clickLogin">登录
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import {loginAdmin} from '@/config/api/getData.js';
    import {SETCOOKIE} from '@/assets/common/js/global.js';
    import {_token_admin,_userinfo_admin} from '@/config/config.js';

    export default {
        name: "Login",
        data() {
            return {
                //=====  请求数据
                loginData: {
                    account: "",
                    password: "",
                    checkCode: ""
                },
                //=====   响应数据
                loginLoding: false
            }
        },
        methods: {
            clickLogin: function () {
                this.loginRequset();
            },
            //======================================================================   请求数据
            loginRequset: function () {
                this.loginLoding = true;
                loginAdmin(this.loginData).then(res => {
                    if (res.success) {
                        localStorage.setItem(_userinfo_admin, JSON.stringify(res.data));
                        SETCOOKIE(_token_admin, res.token);
                        this.$Message.success("登录成功");
                        this.$router.push({
                            path: '/admin'
                        });
                    } else {
                        this.$Message.error(res.message);
                    }
                    this.loginLoding = false;
                }).catch(error => {
                    this.$Message.error("登录失败：" + error);
                    this.loginLoding = false;
                })
            }
        }

    }
</script>

<style lang="stylus">
    .container {
        width: auto;
        height: 100%;
        max-width: 1000px;
        margin: auto;
    }

    .loginPage {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("~@/assets/admin/img/loginbg.jpg") no-repeat bottom;
        background-size: cover;
    }

    .loginPage .loginTitle {
        text-align: center;
        padding: 20px 0;
        font-size: 18px;
    }

    .loginRight {
        margin: auto;
        margin-top: 150px;
        width: 400px;
        min-height: 200px;
        background: #fff;
        border: 1px solid #eee;
        box-shadow: 1px 1px 9px #1d1c1c;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 10px;
    }

    .loginRight .ivu-tabs-nav {
        width: 100%;
    }

    .loginRight .ivu-tabs-nav .ivu-tabs-tab {
        width: 50%;
        text-align: center;
        margin: 0;
    }

    @media screen and (max-width: 500px) {
        .loginRight {
            margin-top: 100px;
            width: 100%;
        }
    }

    .loginBox {
        min-height: 200px;
        padding: 0 20px;
    }

    .loginBox .inputRow {
        margin-top: 30px;
        position: relative;
    }

    .loginBox .inputRow .checkImg {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        width: 64px;
        height: 32px;
    }
</style>
