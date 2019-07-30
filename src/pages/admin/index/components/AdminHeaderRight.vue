<template>
    <!--===================  头部  右则  =======================-->
    <div class="adminTopRight clear_f">
        <ul class="clear_f">
            <li class="f_left">
                <div class="info">
                    <div class="rightLiTextBox">
                        <Badge :dot="personMessages.length>0">
                            <Icon type="ios-notifications-outline" size="26"></Icon>
                        </Badge>
                    </div>
                    <div class="infoBox">
                        <ul class="infoListUl">
                            <li class="infoLi" v-for="(personMessage, key ) in personMessages" :key="personMessage.id">
                                <a class="infoLiText" href="javascript:;">{{key+1}}{{personMessage.title}}</a>
                            </li>
                            <li class="infoLi noteNew" v-show="personMessages.length === 0">
                                <a class="infoLiText" href="javascript:;">暂无消息</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="f_left">
                <div class="userInfo">
                    <div class="faceBox">
                        <Avatar
                                icon="ios-person"
                                size="default"
                                :src="userInfo.face || 'https://i.loli.net/2017/08/21/599a521472424.jpg'"/>
                    </div>
                    <div class="userInfoBox">

                        <div class="row baseInfo">
                            <h3 class="textOne">
                                <Avatar icon="ios-person" size="default"
                                        :src=" userInfo.face || 'https://i.loli.net/2017/08/21/599a521472424.jpg'"/>
                                <span class="accountSpan">{{userInfo.account || '账号'}}</span>
                            </h3>
                            <ul class="clear_f security">
                                <li class="securityLi textOne" v-for="item in updateArray">
                                    <span class="securityText"
                                          @click="clickBaseIfo(item)">{{item.name}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="row importantBox">
                            <ul>
                                <li class="importantLi" v-for="oftenLi in oftenList" :key="oftenLi.id"
                                    @click="clickBaseIfo(oftenLi)">
                                    <span class="iconSpan"></span>
                                    <a href="javascript:void(0)">{{oftenLi.name}}</a>
                                    <span class="activeIconText"></span>
                                </li>

                            </ul>
                        </div>
                        <div class="row logoutBox">
                            <p><span class="logoutBtn" @click="clickLogout">退出</span></p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {GETUSERINFO, SETCOOKIE} from '@/assets/common/js/global.js';
    import {logoutAdmin} from '@/config/api/getData';

    export default {
        name: "AdminHeaderRight",
        data() {
            return {
                userInfo: {},
                updateArray: [
                    {
                        tid: "baseUserInfo",
                        name: "基本信息",
                        url: "/#/admin/UserBaseInfo",
                        iconType: "ios-menu-outline"
                    },
                    {
                        tid: "updatePwd",
                        name: "修改密码",
                        url: "/#/admin/UpdatePassWord",
                        iconType: "ios-menu-outline"
                    }
                ],
                oftenList: [
                    {
                        tid: "message",
                        name: "消息",
                        url: "/#/admin/message/list/0",
                        iconType: "ios-menu-outline"
                    },
                    {
                        tid: "personCenter",
                        name: "个人中心",
                        vue: "TRole",
                        iconType: "ios-menu-outline"
                    }
                ],
                personMessages: []
            };
        },
        methods: {
            clickBaseIfo: function (jsonObj) {
                this.$store.dispatch("admin/changeTabDate", jsonObj);
            },
            clickLogout: function () {
                this.$Message.loading("正在退出系統");
                logoutAdmin("/admin/logout", {},).then(() => {
                    this.$Message.destroy();
                    this.$Message.success("退出成功");
                    SETCOOKIE("token", "", {expires: -1});
                    this.$router.push({
                        path: '/admin/login'
                    });
                }).catch(() => {
                    this.$Message.destroy();
                    this.$Message.success("退出成功");
                    SETCOOKIE("token", "", {expires: -1});
                    this.$router.push({
                        path: '/admin/login'
                    });
                })
            }
        },
        created() {
            let infoFn = GETUSERINFO();
            infoFn ? this.userInfo = infoFn : "";
        }
    }
</script>

<style scoped lang="stylus">
    .adminTopRight
        .rightLiTextBox
            margin: auto;
            text-align: center;
            height: 50px;
            padding: 0 16px;
            padding-top: 12px;
            position: relative;

            &:hover
                background: #191d21;

            span
                color: #fff;

        .info
            position: relative;

            &:hover
                background: #191d21;

                .infoBox
                    display: block;

            .infoBox
                position: absolute;
                top: 50px;
                right: 0;
                width: 200px;
                background: #191d21;
                z-index: 10;
                display: none;

                .infoListUl
                    padding: 10px 0;

                    .infoLi
                        .infoLiText
                            padding: 4px 10px;
                            display: block;
                            font-size: 12px;
                            color: #e2e1e1;

                            &:hover
                                background: #252a2f

                    .noteNew
                        text-align: center;

        .userInfo
            position: relative;

            &:hover
                background: #191d21;

                .userInfoBox
                    display: block;

            .faceBox
                margin: auto;
                text-align: center;
                height: 50px;
                padding: 0 10px;
                padding-top: 8px;

            .userInfoBox
                position: absolute;
                top: 50px;
                right: 0;
                width: 240px;
                min-height: 150px;
                background: #191d21;
                z-index: 10;
                display: none;

                .baseInfo
                    padding: 10px;
                    border-bottom: 1px solid hsla(0, 0%, 100%, .1)

                    .accountSpan
                        display: inline-block
                        margin-left: 10px;
                        color: #e2e1e1;
                        font-size: 12px;

                    .security
                        margin-top: 10px;

                    .securityLi
                        float: left;
                        display: block;
                        width: 50%;
                        text-align: center;
                        border-left: 1px solid hsla(0, 0%, 100%, .1);

                        &:first-child
                            border: none;

                    .securityText
                        color: #e2e1e1;
                        font-size: 12px;
                        cursor: pointer;

            .importantBox
                padding: 10px 0;
                border-bottom: 1px solid hsla(0, 0%, 100%, .1);

                .importantLi
                    padding: 4px 10px;

                    &:hover
                        background: #252a2f;

                    a
                        font-size: 12px;
                        color: #e2e1e1;
                        display: block;

            .logoutBox
                text-align center;

                .logoutBtn
                    display: block;
                    text-align center;
                    padding: 8px;
                    cursor: pointer;
                    font-size: 12px;
                    color: #e2e1e1
                    user-select: none;

                    &:hover
                        background: #252a2f

</style>
