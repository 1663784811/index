<template>
    <!--======   多选面板   ======-->
    <Modal
            v-model="isShow"
            :title="title"
            :mask-closable="closable"
    >
        <div class="panelListInput">
            <Input v-model="valueStr"/>
        </div>
        <div slot="footer">
            <Button type="success" size="large" long :loading="isLoading" @click="submitForm">保存</Button>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: "PanelListInput",
        props: {
            title: {
                type: String,
                default() {
                    return " ";
                }
            }
        },
        data() {
            return {
                valueStr: "",
                isShow: false,
                isLoading: false,
                closable: false,
            }
        },
        methods: {
            setShow(is = false) {
                this.isShow = is;
            },
            setValueStr: function (str = "") {
                this.valueStr = str;
            },
            setLoading(is = false) {
                this.isLoading = is;
            },
            submitForm: function () {
                this.$emit("clickSaveBtn", this.valueStr);
            },
        }
    }
</script>

<style scoped lang="stylus">

</style>
