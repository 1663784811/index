<template>
    <div class="currencyTabBox">
        <div class="clear_f">
            <div class="formBox f_left">
                <div class="formRow">
                <span class="fieldName textOne">
                    <i style="color: #ed4014;margin-right: 4px">*</i>标题:
                </span>
                    <Input class="formInput" type="text" v-model="submitObj.title"/>
                </div>
                <div class="formRow">
                <span class="fieldName textOne">
                    <i style="color: #ed4014;margin-right: 4px">*</i>作者:
                </span>
                    <Input class="formInput" type="text" v-model="submitObj.author"/>
                </div>
                <div class="formRow">
                <span class="fieldName textOne">
                    <i style="color: #ed4014;margin-right: 4px">*</i>图片:
                </span>
                    <Input class="formInput" type="text" v-model="submitObj.img"/>
                </div>
                <div class="formRow">
                <span class="fieldName textOne">
                    <i style="color: #ed4014;margin-right: 4px">*</i>类型:
                </span>
                    <Input class="formInput" type="text" v-model="submitObj.type"/>
                </div>
                <div class="formRow">
                <span class="fieldName textOne">
                    <i style="color: #ed4014;margin-right: 4px">*</i>状态:
                </span>
                    <Input class="formInput" type="text" v-model="submitObj.status"/>
                </div>
                <div class="formRow">
                    <span class="fieldName textOne">来源:</span>
                    <Input class="formInput" type="text" v-model="submitObj.source"/>
                </div>
                <div class="formRow">
                    <span class="fieldName textOne">备注:</span>
                    <Input class="formInput" type="textarea" v-model="submitObj.note"/>
                </div>
            </div>
            <div class="editorBox f_left">
                <div class="formRow">
                    <span class="fieldName textOne"></span>
                    <div class="editorBox" ref="editorBox"></div>
                </div>
            </div>
        </div>

        <div class="footer">
            <Button class="btn" type="success" size="large" :loading="saveLoading" @click="submitDataFn">保存</Button>
            <Button class="btn"
                    type="info"
                    size="large"
                    @click="reTable">返回
            </Button>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import BaseOperation from '@/components/admin/BaseOperation';
    import BaseWindow from '@/components/BaseWindow';
    import {
        API_findIdTKnowledge,
        API_saveTKnowledge
    } from "@/config/api/tKnowledge";
    import E from 'wangeditor';

    export default {
        name: "TKnowledgeUpdate",
        components: {
            BaseOperation,
            BaseWindow
        },
        data() {
            return {
                submitObj: {},
                saveLoading: false,
                editor: null
            }
        },
        mounted() {
            this.editor = new E(this.$refs.editorBox);
            this.editor.customConfig.onchange = (html) => {
                this.submitObj.content = html;
            };
            this.editor.create();
            document.getElementsByClassName("w-e-text-container")[0].style.height = "700px";
            let id = this.$router.currentRoute.query.id;
            if (id) {
                this.submitObj.id = id;
                this.findById();
            }
        },
        methods: {
            //======================================================================   请求数据
            submitDataFn: function () {
                this.saveLoading = true;
                API_saveTKnowledge(this.submitObj).then(res => {
                    this.$Message.success("保存成功");
                    this.submitObj = res;
                    this.saveLoading = false;
                }, errorData => {
                    this.$Message.error("保存失败" + errorData);
                    this.saveLoading = false;
                });
            },
            findById: function () {
                API_findIdTKnowledge(this.submitObj).then(res => {
                    this.submitObj = res;
                    this.editor.txt.html(res.content);
                })
            },
            reTable: function () {
                this.$router.push({
                    path: "/admin/tKnowledge"
                });
            }
        }
    }
</script>

<style scoped lang="stylus">
    .currencyTabBox
        padding: 20px;
        height 100%;
        overflow auto;

        .formBox
            width: 400px;
            margin-right: 50px;
            margin-bottom: 100px;

            .formRow
                position: relative;
                padding: 10px 10px 10px 100px;
                min-height: 42px;

        .editorBox
            width: 750px;

            .ieditorBox
                min-height: 500px;

    .fieldName
        position: absolute;
        top: 13px;
        left: 0;
        display: block;
        width: 90px;
        text-align: right;

    .contentTextName
        text-align: center;
        font-size 18px;
        margin-top: 30px;

    .editorBox
        margin: auto;

    .footer
        padding: 50px 0;
        text-align center;

        .btn
            margin: 0 20px;
</style>
