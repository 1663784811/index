<template>
    <Modal v-model="isDelInfo" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>刪除数据</span>
        </p>
        <div style="text-align:center">
            <p>是否要刪除?</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="isDelLoading" @click="delData" >刪除</Button>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: "BaseDelWindow",
        data:function(){
            return{
                isDelInfo:false,
                isDelLoading:false
            }
        },
        methods:{
            delData:function () {
                this.$emit("clickDelBtn")
            },
            setDelInfo:function (b = false) {
                this.isDelInfo = b;
            },
            setDelLoading:function (b = false) {
                this.isDelLoading = b;
            }
        }
    }
</script>

<style scoped>

</style>
