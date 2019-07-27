<template>
    <div class="userBaseInfo">
        <div class="userBaseInfoBox">
            <div class="fromRow">
                <span class="fieldName">帐号：</span>
                <Input v-model="userinfor.account" placeholder="帐号" disabled/>
            </div>
            <div class="fromRow">
                <span class="fieldName">昵称：</span>
                <Input v-model="userinfor.nickname" placeholder="昵称"/>
            </div>
            <div class="fromRow">
                <span class="fieldName">真实姓名：</span>
                <Input v-model="userinfor.truename" placeholder="真实姓名"/>
            </div>
            <div class="fromRow">
                <span class="fieldName">手机号：</span>
                <Input v-model="userinfor.phone" placeholder="手机号"/>
            </div>
            <div class="fromRow">
                <span class="fieldName">邮箱：</span>
                <Input v-model="userinfor.email" placeholder="邮箱"/>
            </div>
            <div class="fromRow">
                <Button type="success" :loading="loading" long @click="clickSave">保存</Button>
            </div>
        </div>

    </div>
</template>
<script>
    import {GETUSERINFO} from '@/assets/common/js/global.js';
    import {updateuserinfo} from '@/config/api/getData.js';
    import '@/assets/admin/css/adminPage.css';

    export default {
        name: "UserBaseInfo",
        data() {
            return {
                userinfor: {},
                loading: false
            };
        },
        methods: {
            clickSave: function () {
                this.updateUserInfo();
            },
            /**
             * 获取个人信息
             */
            getUserInfo: function () {
                let userinfor = GETUSERINFO();
                userinfor ? this.userinfor = userinfor : '';
            },
            /**
             * 更新个人信息
             */
            updateUserInfo: function () {
                this.loading = true;
                updateuserinfo(this.userinfor).then(res => {
                    if (res.success) {
                        localStorage.setItem("userInfo", JSON.stringify(res.data));
                        this.userinfor = res.data;
                        this.$Message.success(res.message);
                    } else {
                        this.$Message.error(res.message);
                    }
                    this.loading = false;
                }).catch(message => {
                    this.$Message.error(message);
                    this.loading = false;
                })
            }
        },
        created() {
            this.getUserInfo();
        }
    }
</script>

<style scoped lang="stylus">
    .userBaseInfo
        width: 100%;
        height: 100%;
        background: url("~@/assets/common/img/bg.jpg") no-repeat;
        background-size: cover;
        background-position: bottom;
        padding-top: 50px;

        overflow: auto;

        .userBaseInfoBox
            width: 500px;
            margin: auto;
            background: rgba(255, 255, 255, 0.7);
            padding: 40px 90px 56px 20px;
            border-radius: 8px;
            box-shadow: 0 0 6px #000;

            .fromRow
                padding: 20px 0 20px 110px;
                position: relative;

                .fieldName
                    position: absolute
                    top: 24px;
                    left: 0;
                    width: 110px;
                    text-align: right;


</style>
