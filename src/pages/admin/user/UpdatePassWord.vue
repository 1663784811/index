<template>
    <div class="updatePassWord">
        <!--===================    更新密码     ===================-->
        <div class="updatePassWordBox">
            <h1 class="pwdTitle">修改密码</h1>
            <p class="inputP">
                <Input type="password" v-model="passwordjson.password" prefix="ios-key" placeholder="原密码"/>
            </p>
            <p class="inputP">
                <Input type="password" v-model="passwordjson.newpassword" prefix="ios-key-outline" placeholder="新密码"/>
            </p>
            <p class="inputP">
                <Input type="password" v-model="passwordjson.confirmpassword" prefix="ios-key-outline"
                       placeholder="确认密码"/>
            </p>
            <p class="inputP">
                <Button type="success" :loading="loading" @click="clickSave" long>保存</Button>
            </p>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import {updatePassword} from '@/config/api/getData.js';

    export default {
        name: "UpdatePassWord",
        data() {
            return {
                passwordjson: {
                    password: "",
                    newpassword: "",
                    confirmpassword: "",
                },
                loading: false
            };
        },
        methods: {
            clickSave: function () {
                if (this.passwordjson.password.length < 6) {
                    this.$Message.error("原密码不正确！");
                } else if (this.passwordjson.newpassword.length < 6) {
                    this.$Message.error("新密码不能少于6位！");
                } else if (this.passwordjson.newpassword !== this.passwordjson.confirmpassword) {
                    this.$Message.error("两次输入的密码不一致");
                } else {
                    this.updatePassword();
                }
            },
            /**
             * 修改密码
             */
            updatePassword: function () {
                this.loading = true;
                updatePassword(this.passwordjson).then(res => {
                    if (res.success) {
                        this.$Message.success(res.message + ",请重新登录");
                        this.$router.push({
                            path: "/admin/login"
                        })
                    } else {
                        this.$Message.error(res.message);
                    }
                    this.loading = false;
                }).catch(message => {
                    this.$Message.error(message);
                    this.loading = false;
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .updatePassWord
        width: 100%;
        height: 100%;
        background: url("~@/assets/common/img/bg.jpg") no-repeat;
        background-size: cover;
        background-position: bottom;
        padding-top: 100px;

        .updatePassWordBox
            width: 380px;
            margin: auto;
            background: rgba(255, 255, 255, 0.61);
            padding: 0 30px 30px 30px;
            border-radius: 8px;
            box-shadow: 0 0 6px #000;

            .pwdTitle
                text-align: center;
                font-size: 18px;
                padding: 20px 0;

            .inputP
                margin-bottom: 20px;

</style>
