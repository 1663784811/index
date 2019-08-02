<template>

    <div class="about">
        <!--========   头部    ==========-->
        <HomeHeader></HomeHeader>
        <!--========    图片   ==========-->
        <div class="pic">
            <BaseStatistics ref="sexCountBase"></BaseStatistics>
        </div>
        <Information :title="infoTitle" :content="infoContent"></Information>
        <!--========   九宫格  =======-->
        <ThreeCell class="threeCell" :colData="colData" height="288px" imgBoxStyle="padding:50px 10px"></ThreeCell>
        <!--=======     脚部   ==========-->
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
        name: "About",
        components: {
            HomeHeader,
            HomeFooter,
            Information,
            ThreeCell,
            BaseStatistics
        },
        data() {
            return {
                infoTitle: "Who are we?",
                infoContent: "我们是谁？我们是最热心于计算机技术、擅长IT技术、计算机编程。专精于提供高品质互联网技术开发服务，提供专业的和高标准的互联网产品设计开发方案。",
                value1: 0,
                colData: [
                    {
                        img: "/img/weixinservice.png",
                        title: "服务号开发",
                        introduction: "给企业和组织提供更强大的业务服务与用户管理能力，帮助企业快速实现全新的公众号服务平台。"
                    },
                    {
                        img: "/img/weixinsubscribe.png",
                        title: "订阅号开发",
                        introduction: "为媒体和个人提供一种新的信息传播方式，构建与读者之间更好的沟通与管理模式。"
                    },
                    {
                        img: "/img/weixinapp.png",
                        title: "小程序开发",
                        introduction: "一种新的开放能力，可以在微信内被便捷地获取和传播，同时具有出色的使用体验。"
                    },
                    {
                        img: "/img/weixinpay.png",
                        title: "微信支付",
                        introduction: "微信支付 - 中国领先的第三方支付平台 ｜ 微信支付提供安全快捷的支付方式"
                    },
                ]
            }
        },
        mounted() {
            this.whyMap();
        },
        methods: {
            whyMap: function () {

//数据纯属虚构
                var data = [{
                    name: '江苏省',
                    value: 5.3
                },
                    {
                        name: '北京市',
                        value: 3.8
                    },
                    {
                        name: '上海',
                        value: 4.6
                    },
                    {
                        name: '重庆',
                        value: 3.6
                    },
                    {
                        name: '河北',
                        value: 3.4
                    },
                    {
                        name: '河南',
                        value: 3.2
                    },
                    {
                        name: '云南',
                        value: 1.6
                    },
                    {
                        name: '辽宁',
                        value: 4.3
                    },
                    {
                        name: '黑龙江',
                        value: 4.1
                    },
                    {
                        name: '湖南',
                        value: 2.4
                    },
                    {
                        name: '安徽',
                        value: 3.3
                    },
                    {
                        name: '山东',
                        value: 3.0
                    },
                    {
                        name: '新疆',
                        value: 1
                    },
                    {
                        name: '江苏',
                        value: 3.9
                    },
                    {
                        name: '浙江',
                        value: 3.5
                    },
                    {
                        name: '江西',
                        value: 2.0
                    },
                    {
                        name: '湖北',
                        value: 2.1
                    },
                    {
                        name: '广西',
                        value: 3.0
                    },
                    {
                        name: '甘肃',
                        value: 1.2
                    },
                    {
                        name: '山西',
                        value: 3.2
                    },
                    {
                        name: '内蒙古',
                        value: 3.5
                    },
                    {
                        name: '陕西',
                        value: 2.5
                    },
                    {
                        name: '吉林',
                        value: 4.5
                    },
                    {
                        name: '福建',
                        value: 2.8
                    },
                    {
                        name: '贵州',
                        value: 1.8
                    },
                    {
                        name: '广东',
                        value: 3.7
                    },
                    {
                        name: '青海',
                        value: 0.6
                    },
                    {
                        name: '西藏',
                        value: 0.4
                    },
                    {
                        name: '四川',
                        value: 3.3
                    },
                    {
                        name: '宁夏',
                        value: 0.8
                    },
                    {
                        name: '海南',
                        value: 1.9
                    },
                    {
                        name: '台湾',
                        value: 0.1
                    },
                    {
                        name: '香港',
                        value: 0.1
                    },
                    {
                        name: '澳门',
                        value: 0.1
                    }
                ];

                var yData = [];
                var barData = [];

                for (var i = 0; i < 10; i++) {
                    barData.push(data[i]);
                    yData.push(i + data[i].name);
                }

                var option = {
                    title: [{
                        show: true,
                        text: '排名情况',
                        textStyle: {
                            color: '#2D3E53',
                            fontSize: 18
                        },
                        right: 180,
                        top: 100
                    }],
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            return params.name + '：' + params.data['value'] + '%'
                        },
                    },
                    visualMap: {
                        type: 'continuous',
                        orient: 'horizontal',
                        itemWidth: 10,
                        itemHeight: 80,
                        text: ['高', '低'],
                        showLabel: true,
                        seriesIndex: [0],
                        min: 0,
                        max: 2,
                        inRange: {
                            color: ['#6FCF6A', '#FFFD64', '#FF5000']
                        },
                        textStyle: {
                            color: '#7B93A7'
                        },
                        bottom: 30,
                        left: 'left',
                    },
                    grid: {
                        right: 10,
                        top: 135,
                        bottom: 100,
                        width: '20%'
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true,
                        nameGap: 16,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            margin: 85,
                            textStyle: {
                                color: '#455A74',
                                align: 'left',
                                fontSize: 14
                            },
                            rich: {
                                a: {
                                    color: '#fff',
                                    backgroundColor: '#FAAA39',
                                    width: 20,
                                    height: 20,
                                    align: 'center',
                                    borderRadius: 2
                                },
                                b: {
                                    color: '#fff',
                                    backgroundColor: '#4197FD',
                                    width: 20,
                                    height: 20,
                                    align: 'center',
                                    borderRadius: 2
                                }
                            },
                            formatter: function (params) {
                                if (parseInt(params.slice(0, 1)) < 3) {
                                    return [
                                        '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                                    ].join('\n')
                                } else {
                                    return [
                                        '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                                    ].join('\n')
                                }
                            }
                        },
                        data: yData
                    },
                    geo: {
                        // roam: true,
                        map: 'china',
                        left: 'left',
                        right: '300',
                        // layoutSize: '80%',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                areaColor: '#fff464'
                            }
                        }
                    },
                    series: [{
                        name: 'mapSer',
                        type: 'map',
                        roam: false,
                        geoIndex: 0,
                        label: {
                            show: false,
                        },
                        data: data
                    }, {
                        name: 'barSer',
                        type: 'bar',
                        roam: false,
                        visualMap: false,
                        zlevel: 2,
                        barMaxWidth: 8,
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [{
                                        colorStops: [{
                                            offset: 0,
                                            color: '#FFD119' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#FFAC4C' // 100% 处的颜色
                                        }]
                                    },
                                        {
                                            colorStops: [{
                                                offset: 0,
                                                color: '#00C0FA' // 0% 处的颜色
                                            }, {
                                                offset: 1,
                                                color: '#2F95FA' // 100% 处的颜色
                                            }]
                                        }
                                    ];
                                    if (params.dataIndex < 3) {
                                        return colorList[0]
                                    } else {
                                        return colorList[1]
                                    }
                                },
                                barBorderRadius: 15
                            }
                        },
                        data: barData
                    }]
                };
                this.$refs.sexCountBase.setOption(option);
            }
        }
    }
</script>

<style scoped lang="stylus">
    .about
        .pic
            text-align: center;
            min-width: 1200px;
            max-width: 1920px;
            margin: auto;
            height: 600px;

        .threeCell
            margin-bottom: 150px;

</style>
