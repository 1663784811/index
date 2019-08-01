<template>
    <RadioGroup v-model="social">
        <Radio v-for="(item ,index) in arrayData"
               :label="toStr(item[dataKey])"
               :key="index"
        >
            {{item[dataName]}}
        </Radio>
    </RadioGroup>
</template>

<script>

    import {AJAXGET} from '@/assets/common/js/global';

    export default {
        name: "UrlRadio",
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
                type: String,
                default() {
                    return "";
                }
            },
        },
        data() {
            return {
                social: this.value,
                arrayData: []
            }
        },
        methods: {
            toStr(o) {
                return o + "";
            }
        },
        created() {
            AJAXGET(this.url, {}).then(res => {
                this.arrayData = res;
            })
        },
        watch: {
            social: function () {
                this.$emit('input', this.social + "");
            },
            value: function () {
                this.social = this.value;
            }
        }
    }
</script>

<style scoped>

</style>
