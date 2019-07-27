<template>
    <!--==============       多选      ===============-->
    <CheckboxGroup v-model="social">
        <Checkbox
                :label="toStr(data[dataKey])"
                v-for="(data ,key ) in checkBoxData" :key="key"
        >{{data[dataName]}}
        </Checkbox>
    </CheckboxGroup>
</template>

<script>

    import {AJAXGET} from '@/assets/common/js/global';

    export default {
        name: "UrlCheckbox",
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
            value: {
                type: [Array, String],
                default() {
                    return [];
                }
            },
        },
        data() {
            return {
                social: [],
                checkBoxData: []
            }
        },
        methods: {
            toStr(o) {
                return o + "";
            }
        },
        created() {
            if (typeof this.value === 'object') {
                this.social = [];
                for (let i = 0; i < this.value.length; i++) {
                    this.social[i] = this.value[i] + "";
                }
            } else if (typeof this.value === 'string') {
                this.social = this.value.split(",");
            }
            if (this.url !== "") {
                AJAXGET(this.url, {}).then(res => {
                    this.checkBoxData = res;
                })
            }
        },
        watch: {
            social: function () {
                this.$emit('input', this.social.join(','));
            },
            value: function () {
                if (typeof this.value === 'object') {
                    this.social = [];
                    for (let i = 0; i < this.value.length; i++) {
                        this.social[i] = this.value[i] + "";
                    }
                } else if (typeof this.value === 'string') {
                    this.social = this.value.split(",");
                }
            }
        }
    }
</script>

<style scoped>

</style>
