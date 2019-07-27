<template>
    <!--======   多选面板   ======-->
    <Modal v-model="isShow"
           :title="title"
           :mask-closable="closable"
    >
        <div class="checkboxDiv">
            <template v-if="checkBoxData.length>0">
                <CheckboxGroup v-model="social">
                    <template v-for="data in checkBoxData">
                        <Checkbox
                                v-if="isDisabled(data[dataKey]) && !closeProhibit"
                                :label="toStr(data[dataKey])" disabled>
                            {{data[dataName]}}
                        </Checkbox>
                        <Checkbox
                                v-else="isDisabled(data[dataKey])"
                                :label="toStr(data[dataKey])">
                            {{data[dataName]}}
                        </Checkbox>
                    </template>
                </CheckboxGroup>
            </template>
            <template v-else>
                <p class="noDate">暂无数据</p>
            </template>
        </div>
        <div slot="footer">
            <Button type="success" size="large" long :loading="isLoading" @click="submitForm">保存</Button>
        </div>
    </Modal>
</template>

<script>

    import {AJAXGET} from '@/assets/common/js/global.js';
    import UrlCheckbox from "../form/UrlCheckbox.vue";

    export default {
        name: "PanelCheckbox",
        components: {
            UrlCheckbox
        },
        props: {
            url: {
                type: String,
                default() {
                    return "";
                }
            },
            dataKey: {
                type: String,
                default() {
                    return "key";
                }
            },
            dataName: {
                type: String,
                default() {
                    return "name";
                }
            },
            title: {
                type: String,
                default() {
                    return "标题";
                }
            },
            value: {
                type: [Array, String],
                default() {
                    return [];
                }
            },
            closeProhibit: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data() {
            return {
                isShow: false,
                isLoading: false,
                closable: false,
                social: [],
                checkBoxData: [],
                setValueData: [],
            }
        },
        methods: {
            submitForm: function () {
                let tempData = [];
                if (this.closeProhibit) {
                    tempData = this.social;
                } else {
                    for (let i = 0; i < this.social.length; i++) {
                        let datakey = this.social[i];
                        if (this.setValueData.indexOf(datakey) === -1) {
                            tempData.push(this.social[i]);
                        }
                    }
                }
                this.$emit("clickSaveBtn", tempData);
            },
            toStr(o) {
                return o + "";
            },
            setShow(is = false) {
                this.isShow = is;
            },
            setLoading(is = false) {
                this.isLoading = is;
            },
            isDisabled: function (keyValue) {
                return !(this.setValueData.indexOf(keyValue + "") === -1);
            }
        },
        created() {
            this.social = [];
            this.setValueData = [];
            if (typeof this.value === 'object') {
                for (let i = 0; i < this.value.length; i++) {
                    this.social[i] = this.value[i] + "";
                    this.setValueData[i] = this.value[i] + "";
                }
            } else if (typeof this.value === 'string') {
                this.social = this.value.split(",");
                this.setValueData = this.value.split(",");
            }
            if (this.url !== "") {
                AJAXGET(this.url, {}, 1).then(res => {
                    this.checkBoxData = res;
                });
            }
        },
        watch: {
            value: function () {
                this.social = [];
                this.setValueData = [];
                if (typeof this.value === 'object') {
                    for (let i = 0; i < this.value.length; i++) {
                        this.social[i] = this.value[i] + "";
                        this.setValueData[i] = this.value[i] + "";
                    }
                } else if (typeof this.value === 'string') {
                    this.social = this.value.split(",");
                    this.setValueData = this.value.split(",");
                }
            },
            url: function () {
                if (this.url !== "") {
                    AJAXGET(this.url, {}, 1).then(res => {
                        this.checkBoxData = res;
                    });
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    .checkboxDiv
        padding: 20px;
        text-align: center;

        .noDate
            text-align: center;
</style>
