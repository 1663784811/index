<template>
    <div class="statistics">
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

</template>

<script>
    import {findAllTStatistics} from '@/config/api/getData.js';
    import BaseStatistics from '@/components/statistics/BaseStatistics';

    export default {
        name: "Statistics",
        components: {
            BaseStatistics
        },
        data() {
            return {
                //===========   条形图
                optionBar: {
                    title: {
                        text: '测试X公司',
                        subtext: "测试产品销售量",
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
                findAllTStatistics().then(res => {
                    let man = 0;
                    let women = 0;
                    let unknown = 0;
                    let weixinuser = 0;
                    let userall = 0;
                    if (res.length > 0) {
                        for (let i = 0; i < res.length; i++) {
                            if (i === res.length - 1) {
                                man = res[i].man || 0;
                                women = res[i].women || 0;
                                unknown = res[i].unknown || 0;
                                userall = res[i].userall || 0;
                                weixinuser = res[i].weixinuser || 0;
                            }
                        }
                    }
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
                                radius: '55%',
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
                }).catch(mesg => {
                    this.$Message.error("获取数据失败：" + mesg);
                })
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
