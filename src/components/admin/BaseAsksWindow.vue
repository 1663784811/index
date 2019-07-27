<template>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: "BaseWindow",
        props: {
            title: {
                type: String,
                default: " "
            },
            fieldData: {
                type: Array,
                default: []
            },
        },
        mounted() {
        },
        data() {
            return {
                isShowWindow: false,
                fromData: {}
            }
        },

        methods: {
            //==== 开关弹窗
            operationWindow: function (isOpen = false) {
                this.isShowWindow = isOpen;
            },
            //====== 提交表单
            submitForm: function () {
                //===验证数据
                let fieldData = this.fieldData;
                let fromData = this.fromData;
                //=====  验证数据，数据转换
                for (let i = 0; i < fieldData.length; i++) {
                    let fieldDataObj = fieldData[i];
                    let fromDataObj = fromData[fieldDataObj.key];
                    if (fieldDataObj.isRequired) {

                    } else {
                        if (fromDataObj != "") {

                        }
                    }
                }
                //===提交表单
                this.$emit("submitForm", fromData)
            },
            //===== 设置表单数据
            setfromData: function (fromData) {
                this.fromData = fromData;
            }
        }
    }
</script>

<style scoped lang="stylus">
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


</style>
