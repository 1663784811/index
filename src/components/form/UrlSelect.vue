<template>
    <!--===========   下拉选择    ============-->
    <Select v-model="social">
        <Option v-for="item in arrayData"
                :value="toStr(item[dataKey])"
                :key="toStr(item[dataKey])">
            {{ item[dataName] }}
        </Option>
    </Select>
</template>

<script>

    import {AJAXGET} from '@/assets/common/js/global';

    export default {
        name: "UrlSelect",
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
                social: "",
                arrayData: []
            }
        },
        methods: {
            toStr(o) {
                return o + "";
            }
        },
        created() {
            this.social = this.value;
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
