<template>
    <div class="statistics">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <div class="container">
            <div class="row">
                <div class="f_left colBox">
                    <BaseStatistics ref="sexCountBase"></BaseStatistics>
                </div>
                <div class="f_left colBox">
                    <BaseStatistics ref="userCountBase"></BaseStatistics>
                </div>
            </div>
            <div class="row">
                <BaseStatistics ref="baseBarStatistics" :option="optionBar"></BaseStatistics>
            </div>
        </div>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>
    import HomeHeader from '@/components/home/HomeHeader';
    import Information from '@/components/home/Information';
    import HomeFooter from '@/components/home/HomeFooter';
    import ThreeCell from '@/components/home/ThreeCell';
    import BaseStatistics from '@/components/statistics/BaseStatistics';

    export default {
        name: "Statistics",
        components: {
            HomeHeader,
            HomeFooter,
            Information,
            ThreeCell,
            BaseStatistics
        },
        data() {
            return {
                //===========   条形图
                optionBar: {
                    title: {
                        text: 'A公司',
                        subtext: "2018产品销售量",
                        subtextStyle: {
                            color: "red"
                        }
                    },
                    color: ['#f44'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '销售量',
                            type: 'bar',
                            barWidth: '60%',
                            data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
                        }
                    ]
                },

            };
        },
        methods: {
            getStatisticsList: function () {
                let man = 20;
                let women = 30;
                let unknown = 25;
                let weixinuser = 20;
                let userall = 50;
                //=== 性别比例
                let sexCount = {
                    //标题
                    title: {
                        text: '用户性别比例'
                    },
                    //说明
                    legend: {
                        type: 'scroll',
                        orient: 'horizontal',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: ["男", "女", "未知"],
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#db5565', '#e5a244', '#49c67d', '#0bacd3', '#c04755', '#41996c', '#db5565', '#bda29a', '#f4ad49', '#546570', '#c4ccd3'],
                    series: [
                        {
                            name: '用户性别比例',
                            type: 'pie',
                            radius: '50%',
                            roseType: 'radius',
                            data: [
                                {value: man, name: '男'},
                                {value: women, name: '女'},
                                {value: unknown, name: '未知'},
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            //======= 标签
                            label: {},
                            //======   标签线
                            labelLine: {},
                            //===== 饼样式
                            itemStyle: {
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 10
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                        }
                    ]
                };
                this.$refs.sexCountBase.setOption(sexCount);
                //=== 用户统计
                let userCount = {
                    title: {
                        text: '用户统计（后台用户、微信用户）',
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    color: ['#0bacd3', '#db5565', '#49c67d', '#376cc5', '#bd3447', '#546570', '#c4ccd3', '#e5a244', '#0bacd3', '#c04755', '#41996c', '#db5565'],
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: ["绑定微信用户", "没绑定微信用户"],
                    },
                    series: [
                        {
                            name: '用户统计',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: [
                                {name: "绑定微信用户", value: weixinuser},
                                {name: "没绑定微信用户", value: userall},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 1)'
                                }
                            }
                        }
                    ]
                };
                this.$refs.userCountBase.setOption(userCount);

            }
        },
        mounted() {
            this.getStatisticsList();
        }
    }
</script>

<style scoped lang="stylus">
    .statistics
        height: 100%;
        overflow: auto;

        .row
            height: 400px;
            padding: 0 50px;
            margin-top: 20px;

            .colBox
                width 50%;
                height 100%
</style>
