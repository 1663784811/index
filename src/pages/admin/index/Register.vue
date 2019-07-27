<template>
    <div class="loginPage">
        <div class="container">
            <div class="loginRight">
                <h1 class="loginTitle">听心后台管理系统</h1>
                <div class="loginBox">
                    <div class="inputRow">
                        <Input size="default" v-model="registerData.account" suffix="ios-contact" placeholder="用户名"/>
                    </div>
                    <div class="inputRow">
                        <Input size="default" v-model="registerData.password" suffix="ios-key" type="password"
                               placeholder="密码"/>
                    </div>
                    <div class="inputRow">
                        <Input size="default" v-model="registerData.passworded" suffix="ios-key-outline" type="password"
                               placeholder="确认密码"/>
                    </div>
                    <div class="inputRow">
                        <Input size="default" v-model="registerData.email" suffix="md-mail" placeholder="邮箱"/>
                    </div>
                    <div class="inputRow">
                        <Input size="default" v-model="registerData.emailcode" suffix="ios-information-circle"
                               placeholder="邮箱验证码"/>
                    </div>
                    <div class="inputRow">
                        <Button size="default" type="success" long @click="clickRegister">注册</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import {registerAdmin} from '@/config/api/getData.js';
    import {SETCOOKIE} from '@/assets/common/js/global.js';

    export default {
        name: "register",
        data() {
            return {
                //=====  请求数据
                registerData: {
                    account: "",
                    password: "",
                    passworded: "",
                    email: "",
                    emailcode: ""
                },
                //=====   响应数据
                registerLoding: false
            }
        },
        methods: {
            clickRegister: function () {
                //== 验证数据
                if (this.registerData.account.length < 3) {
                    this.$Message.error("账号不能少于3位！");
                    return;
                }
                if (this.registerData.password.length < 6) {
                    this.$Message.error("密码不能少于6位！");
                    return;
                }
                if (this.registerData.password !== this.registerData.passworded) {
                    this.$Message.error("您输入的密码不一致！");
                    return;
                }
                this.registerRequset();
            },
            //======================================================================   请求数据
            registerRequset: function () {
                this.registerLoding = true;
                registerAdmin(this.registerData).then(res => {
                    if (res.success) {
                        SETCOOKIE("token", res.token);
                        localStorage.setItem("userInfo", JSON.stringify(res.data));
                        this.$Message.success(res.message);
                        this.$router.push({path: '/admin'});
                    } else {
                        this.$Message.error(res.message);
                    }
                    this.registerLoding = false;
                }).catch(error => {
                    this.$Message.error("登录失败：" + error);
                    this.registerLoding = false;
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
        padding-bottom: 20px;
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
