<template>
    <!--====     基础统计图     ====-->
    <div ref="baseBarStatistics" :style="{height: height,width:width}"></div>
</template>

<script>

    import echarts from 'echarts'

    export default {
        name: "BaseBarStatistics",
        props: {
            height: {
                type: String,
                default() {
                    return "100%";
                }
            },
            width: {
                type: String,
                default() {
                    return "100%";
                }
            },
            option: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        mounted() {
            this.optionEcharts = this.option;
            this.initEchar();
            //========  事件
            let that = this;
            this.myChart.on('click', function (params) {
                that.$emit("clickEcharts", params);
            });
            this.myChart.on('dblclick', function (params) {
                that.$emit("dblclickEcharts", params);
            });
            this.myChart.on('mousemoveEcharts', function (params) {
                that.$emit("dblclickEcharts", params);
            });
            this.myChart.on('mouseoutEcharts', function (params) {
                that.$emit("dblclickEcharts", params);
            });
            window.addEventListener('resize', function () {
                that.myChart.resize()
            });
        },
        data() {
            return {
                optionEcharts: {},
                myChart: null
            }
        },
        methods: {
            //======== 初始化图形
            initEchar: function () {
                this.myChart = echarts.init(this.$refs.baseBarStatistics);
                this.myChart.setOption(this.optionEcharts);
            },
            //========  重置参数
            setOption: function (option) {
                this.optionEcharts = option;
                this.initEchar();
            }
        },
        watch: {
            option: function () {
                this.optionEcharts = this.option;
            }
        }
    }
</script>

<style scoped>

</style>
