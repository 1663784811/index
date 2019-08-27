<template>
    <div class="photo">
        <div class="photoTop clear_f">
            <div class="photoTopRight f_right">
                <Input placeholder="搜索" class="searchInput">
                    <Icon type="ios-search" slot="suffix" class="searchBtn"/>
                </Input>
                <Button type="success" @click="uploadPhoto">上传图片</Button>
            </div>
        </div>
        <div class="waterFallBox clear_f" ref="waterFallBox">
            <div class="imgLiBox"
                 ref="imgLiBox" v-for="(water ,key) in waterFallData" :key="key">
                <div class="photoBox">
                    <span class="delBtn" @click="clickDel(water)"><Icon type="md-trash"/></span>
                    <div class="imgBox" @click="showImg(water)">
                        <img :src="water.path">
                    </div>
                    <div class="noteText textOne">{{water.name}}</div>
                </div>
            </div>
        </div>
        <Modal v-model="isShow"
               :title="title"
               :mask-closable="closable"
        >
            <div class="imgRow">
                <div class="imgBox">
                    <Icon v-show="!uploadData.path" type="md-add" class="addIcon"/>
                    <img v-show="uploadData.path" :src="imgurl">
                    <input type="file" accept="image/*" ref="fileInput" @change="uploadFile">
                </div>
            </div>
            <!--==== 输入框  =====-->
            <div class="formRow">
                <span class="fieldName textOne">图片名:</span>
                <Input placeholder="图片名" type="text" v-model="uploadData.name"/>
            </div>
            <!--==== 输入框  =====-->
            <div class="formRow">
                <span class="fieldName textOne">备注:</span>
                <Input placeholder="图片名" type="text" v-model="uploadData.note"/>
            </div>
            <div slot="footer">
                <Button type="success" size="large" long :loading="isLoading" @click="submitForm">保存</Button>
            </div>
        </Modal>
        <Modal v-model="isShowImg"
               :title="showImgObj.name||' '"
               :mask-closable="closable"
               width="80%"
               footer-hide
        >
            <div class="imgRow" style="text-align: center">
                <img :src="showImgObj.path" alt="">
            </div>
        </Modal>
        <!--======   删除提示   ======-->
        <Modal v-model="isDelInfo" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>刪除数据</span>
            </p>
            <div style="text-align:center">
                <p>是否要刪除?</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="isDelLoading" @click="delData">刪除</Button>
            </div>
        </Modal>
        <div class="pageBox">
            <Page :total="total" show-sizer/>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import {
        API_findPageRPhoto,
        API_uploadFile,
        API_saveRPhoto,
        API_delRPhoto
    } from "@/config/api/rPhoto";

    export default {
        name: "Photo",
        components: {},
        data() {
            return {
                isShow: false,
                title: "上传图片",
                closable: false,
                isLoading: false,
                uploadData: {},
                imgurl: "",
                waterFallData: [],
                page: 1,
                size: 30,
                total: 0,
                isShowImg: false,
                showImgObj: {},
                isDelInfo: false,
                isDelLoading: false
            }
        },
        methods: {
            delData: function () {
                this.isDelLoading = true;
                API_delRPhoto( [this.showImgObj.id] ).then(res => {
                    this.$Message.success(res.message);
                    this.isDelLoading = false;
                    this.isDelInfo = false;
                    this.loadingList();
                }).catch(res => {
                    this.$Message.success(res.message);
                    this.isDelLoading = false;
                })
            },
            clickDel: function (obj) {
                this.showImgObj = obj;
                this.isDelInfo = true;
            },
            showImg: function (obj) {
                this.isShowImg = true;
                this.showImgObj = obj;
            },

            /**
             * 点击上传图片
             */
            uploadPhoto: function () {
                this.uploadData = {};
                this.isShow = true;
            },
            submitForm: function () {
                this.saveData();
            },

            /**
             * 瀑布流
             */
            layoutWaterFall: function () {
                let imgLiBox = this.$refs.imgLiBox;
                if (imgLiBox) {
                    let width = imgLiBox[0].offsetWidth;
                    let waterFallBox = this.$refs.waterFallBox;
                    let windowWidth = document.body.offsetWidth;
                    let number = Math.floor(windowWidth / width);
                    waterFallBox.style.width = (number * width) + "px";
                    let rowArr = [];
                    for (let i = 0; i < imgLiBox.length; i++) {
                        if (i < number) {
                            rowArr.push(imgLiBox[i].offsetHeight)
                            imgLiBox[i].style.position = "static";
                            imgLiBox[i].style.left = undefined;
                            imgLiBox[i].style.top = undefined;
                        } else {
                            let minHeight = Math.min.apply(null, rowArr);
                            let index = rowArr.indexOf(minHeight);
                            rowArr[index] = minHeight + imgLiBox[i].offsetHeight
                            imgLiBox[i].style.position = "absolute";
                            imgLiBox[i].style.left = width * index + 'px';
                            imgLiBox[i].style.top = minHeight + 'px';
                        }
                    }
                } else {
                    let that = this;
                    setTimeout(function () {
                        that.layoutWaterFall();
                    }, 1000)
                }
            },
            /**
             * 加载列表数据
             */
            loadingList: function () {
                this.waterFallData = [];
                let json = {
                    page: this.page,
                    size: this.size,
                    total: this.total
                };
                API_findPageRPhoto(json).then(res => {
                    console.log(res)
                    this.page = res.page;
                    this.size = res.size;
                    this.total = res.total;
                    this.waterFallData = res.data;
                }).catch(res => {
                    this.$Message.error("加载数据失败");
                })
            },

            /**
             * 上传文件
             *
             */
            uploadFile: function () {
                let fileData = this.$refs.fileInput.files[0];
                if (fileData) {
                    let param = new FormData();
                    param.append('file', fileData);
                    API_uploadFile(param).then(res => {
                        this.imgurl = res.url;
                        this.uploadData.path = res.path;
                    }).catch(res => {
                        this.$Message.error("上传失败");
                    })
                }
            },
            /**
             * 保存图片数据
             */
            saveData: function () {
                this.isLoading = true;
                API_saveRPhoto(this.uploadData).then(res => {
                    this.$Message.success("保存成功！");
                    this.isLoading = false;
                    this.isShow = false;
                    this.loadingList();
                }).catch(res => {
                    this.isLoading = false;
                    this.$Message.error("保存数据失败:" + res);
                })
            }
        },
        mounted() {
            this.loadingList();
            let that = this;
            window.onload = function () {
                that.layoutWaterFall();
            };
            window.onresize = function () {
                that.layoutWaterFall();
            }
        }
    }
</script>

<style scoped lang="stylus">
    .photo
        height: 100%;
        overflow: auto;
        padding-bottom: 54px;

        .photoTop
            border-bottom: 1px solid #dcdee2;
            padding: 10px;

            .searchInput
                width: 200px;
                margin-right: 20px;

                .searchBtn
                    cursor: pointer;

        .waterFallBox
            position: relative;
            margin: 10px auto;


            .imgLiBox
                float: left;
                width: 200px;
                padding: 10px;

                .photoBox
                    padding: 6px;
                    border: 1px solid #e0e0e0;
                    border-radius: 4px;
                    overflow: hidden;
                    position: relative;

                    &:hover
                        box-shadow: 0 0 2px #717171;

                        .delBtn
                            display: block;

                        img
                            transform: scale(1.1, 1.1);

                    .delBtn
                        position: absolute;
                        top: 2px;
                        right: 2px;
                        display: none;
                        z-index: 1;
                        background: rgba(121, 121, 121, 0.69);
                        font-size: 16px;
                        padding: 2px;
                        color: #fff;
                        border-radius: 4px;
                        cursor: pointer;

                        &:hover
                            background: #ff6842;

                    .imgBox
                        text-align: center;
                        overflow: hidden;
                        width: 100%;
                        cursor: pointer

                        img
                            transition: all 1s;

                    .noteText
                        font-size: 12px;
                        padding: 6px 0;
                        text-align: center;


    .formRow
        position: relative;
        padding: 10px 10px 10px 100px;
        min-height: 42px;

        .fieldName
            position: absolute;
            top: 13px;
            left: 0;
            display: block;
            width: 90px;
            text-align: right;

    .imgRow
        margin-bottom: 20px;

        .imgBox
            width: 204px;
            height: 204px;
            margin: auto;
            position: relative;
            overflow: hidden;
            text-align: center;
            padding: 4px;
            border: 1px solid #eee;

            &:hover
                background: #efefef;

            .addIcon
                position: absolute
                top: 50%;
                left: 50%;
                font-size: 60px;
                margin-left: -30px;
                margin-top: -30px;

            input
                position: absolute;
                bottom: 0;
                right: 0;
                width: 2000px;
                height: 2000px;
                outline: 0;
                border: 0;
                cursor: pointer

    .pageBox
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: right;
        padding: 10px;
        border-top: 1px solid #ececec;
        box-shadow: -1px 0 2px #c7c7c7;
</style>
