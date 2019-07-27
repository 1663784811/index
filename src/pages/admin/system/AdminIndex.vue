<template>
    <div class="adminIndex">
        <ul class="clear_f tabUl">
            <li class="f_left tabLi">
                <BaseLableBox textNote="用户总数" :textNum="userCount">
                    <Icon type="ios-people" slot="icon"/>
                </BaseLableBox>
            </li>
            <li class="f_left tabLi">
                <BaseLableBox textNote="访问总量" :textNum="visitCount" iconBgColer="#F0433D">
                    <Icon type="md-planet" slot="icon"/>
                </BaseLableBox>
            </li>
            <li class="f_left tabLi">
                <BaseLableBox textNote="今日浏览量" :textNum="toDayVisit" iconBgColer="#e6bf2b">
                    <Icon type="md-pulse" slot="icon"/>
                </BaseLableBox>
            </li>
            <li class="f_left tabLi">
                <BaseLableBox textNote="微信用户" :textNum="weixinUser" iconBgColer="#2b85e4">
                    <Icon type="md-text" slot="icon"/>
                </BaseLableBox>
            </li>
        </ul>
        <div class="statisticsRow row" style=" margin: auto; height:600px">
            <!--//=========== 拆线图-->
            <BaseStatistics ref="baseLineStatistics"></BaseStatistics>
        </div>
        <div class="statisticsRow row" style=" margin: auto; height:600px">
            <!--//=========== 条形图-->
            <BaseStatistics ref="baseBarStatistics"></BaseStatistics>
        </div>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import BaseStatistics from '@/components/statistics/BaseStatistics';
    import BaseLableBox from '@/components/common/BaseLableBox';
    import {findAllTStatistics} from '@/config/api/getData.js';


    export default {
        name: "AdminIndex",
        components: {
            BaseStatistics,
            BaseLableBox
        },
        data() {
            return {
                userCount: 0,
                visitCount: 0,
                toDayVisit: 0,
                weixinUser: 0,
            }
        },
        methods: {
            getStatisticsList: function () {
                findAllTStatistics().then(res => {
                    let lineDateArray = [];//日期列表
                    let visitArray = [];//访问量列表
                    let adduSerArray = []; //新增用户数
                    if (res.length > 0) {
                        for (let i = 0; i < res.length; i++) {
                            if (i === res.length - 1) {
                                this.toDayVisit = res[i].visit;
                                this.userCount = res[i].userall;
                                this.visitCount = res[i].visitall;
                                this.weixinUser = res[i].weixinuser;
                            }
                            lineDateArray.push(res[i].createtime.match(/(\d{4})-(\d{2})-(\d{2})/)[0]);
                            visitArray.push(res[i].visit);
                            adduSerArray.push(res[i].adduser);
                        }
                    }
                    let lineStatistics = {
                        title: {
                            text: '后台访问量统计'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            data: lineDateArray
                        },
                        yAxis: {
                            splitLine: {
                                show: true
                            }
                        },
                        dataZoom: [{}, {
                            type: 'inside'
                        }],
                        series: {
                            name: '后台访问量统计',
                            type: 'line',
                            data: visitArray,
                            markLine: {
                                silent: false
                            }
                        }
                    };
                    this.$refs.baseLineStatistics.setOption(lineStatistics);
                    let optionBar = {
                        title: {
                            text: '新增用户统计'
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
                                data: lineDateArray,
                                axisTick: {
                                    alignWithLabel: true
                                }
                            }
                        ],
                        dataZoom: [{}, {
                            type: 'inside'
                        }],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '新增用户',
                                type: 'bar',
                                barWidth: '60%',
                                data: adduSerArray
                            }
                        ]
                    };
                    this.$refs.baseBarStatistics.setOption(optionBar);
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
    .adminIndex
        height: 100%;
        overflow: auto;

        .statisticsRow
            padding: 40px;

        .tabUl
            padding: 20px 0 0 20px;

            .tabLi
                padding: 0 20px 20px 0;
                width: 25%;

    @media screen and (max-width: 1200px)
        .adminIndex
            .tabUl
                .tabLi
                    width: 50%;


</style>
