<template>
    <!--头部  右则-->
    <div class="adminTopRight clear_f">
        <ul class="clear_f">
            <li class="f_left">
                <div class="info">
                    <div class="rightLiTextBox">
                        <Badge :count="personMessages.length" v-if="personMessages.length>0" type="warning">
                            <Icon type="ios-notifications-outline" size="30"></Icon>
                        </Badge>
                        <Icon v-else type="ios-notifications-outline" size="30"></Icon>
                    </div>
                    <div class="infoBox">
                        <ul class="infoListUl" v-if="personMessages.length>0">
                            <li class="infoLi" v-for="(personMessage, key ) in personMessages" :key="personMessage.id">
                                <a class="infoLiText" href="javascript:;" @click="clickBaseIfo(personMessage)">{{key+1}}{{personMessage.title}}</a>
                            </li>
                        </ul>
                        <p v-else class="noneMessage">
                            没有未读的消息
                        </p>
                    </div>
                </div>
            </li>
            <li class="f_left">
                <div class="userInfo">
                    <div class="faceBox">
                        <Avatar
                                icon="ios-person"
                                size="default"
                                :src="getFace(userInfo.face)"/>
                    </div>
                    <div class="userInfoBox">
                        <div class="row baseInfo">
                            <h3 class="textOne">
                                <Avatar icon="ios-person"
                                        @click="updateFace"
                                        size="default"
                                        :src="getFace(userInfo.face)"/>
                                <span class="accountSpan">{{userInfo.account}}</span>
                            </h3>

                            <ul class="clear_f security">
                                <li class="securityLi textOne">
                                    <span class="securityText"
                                          @click="clickBaseIfo(baseUserInfo)">{{baseUserInfo.name}}
                                    </span>
                                </li>
                                <li class="securityLi textOne">
                                    <span class="securityText"
                                          @click="clickBaseIfo(updatePwd)">{{updatePwd.name}}
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
        <!--======================           修改头像           ========================-->
        <Modal title="Common Modal dialog box title">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>

<script>
    import {AJAXGET} from '@/assets/common/js/global';

    export default {
        name: "AdminHeaderRight",
        data() {
            return {
                userInfo: {},
                baseUserInfo: {
                    id: "baseUserInfo",
                    name: "基本信息",
                    url: "/admin/UserBaseInfo",
                    iconType: "ios-menu-outline"
                },
                updatePwd: {
                    id: "updatePwd",
                    name: "修改密码",
                    url: "/admin/UpdatePassWord",
                    iconType: "ios-menu-outline"
                },
                oftenList: [
                    {
                        id: "message",
                        name: "消息",
                        url: "/admin/message/list/0",
                        iconType: "ios-menu-outline"
                    }
                ],
                personMessages: []
            };
        },
        methods: {
            clickBaseIfo: function (jsonObj) {
                this.$emit("clickBaseIfo", jsonObj);
            },
            updateFace: function () {

            },
            clickLogout: function () {
                this.$emit("clickLogout");
            },
            getFace(face) {
                face = face || 'https://i.loli.net/2017/08/21/599a521472424.jpg'
                return face;
            },
            /**
             * 获取未读消息
             */
            getMessageUnread: function () {
                AJAXGET("/admin/findMyMessageList", {status: 0}, 1).then(res => {
                    let tempArr = [];
                    for (let i = 0; i < res.length; i++) {
                        let json = {};
                        json.id = res[i].id;
                        json.name = res[i].tmessage.title;
                        json.iconType = "ios-menu-outline";
                        json.title = res[i].tmessage.title;
                        json.url = "/admin/message/list/0/" + res[i].id;
                        tempArr.push(json);
                    }
                    this.personMessages = tempArr;
                }).catch(mesg => {
                    this.$Message.error("获取未读信息失败:" + mesg);
                });
            }


        },
        created() {
            this.userInfo = global.getUserInfo();
            this.getMessageUnread();
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
            color: #fff;

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

                .noneMessage
                    text-align: center;
                    padding: 20px 0;
                    color: #efefef;

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
