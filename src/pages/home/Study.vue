<template>
    <div class="h5">
        <div class="canvasBox">
            <canvas ref="universe"></canvas>
        </div>
    </div>
</template>

<script>
    import {Star} from "./star.js";

    export default {
        name: "Study",

        data() {
            return {
                starDensity: .216,
                speedCoeff: .05,
                width: 0,
                height: 0,
                starCount: 0,
                circleRadius: 0,
                circleCenter: {},
                universe: null,
                stars: [],
            }
        },
        mounted() {
            this.initPage();
            let that = this;
            window.onresize = function () {
                that.windowResizeHandler();
            }
        },
        methods: {
            initPage: function () {
                window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                //初始化
                this.windowResizeHandler();
                //创建对象
                this.createUniverse();
                //画出星星
                this.draw();
            },

            /**
             * 重窗口
             */
            windowResizeHandler: function () {
                let canva = this.$refs.universe;
                this.width = window.innerWidth;
                this.height = window.innerHeight;
                this.starCount = this.width * this.starDensity;
                this.circleRadius = (this.width > this.height ? this.height / 2 : this.width / 2);
                this.circleCenter = {
                    x: this.width / 2,
                    y: this.height / 2
                };
                canva.setAttribute('width', this.width);
                canva.setAttribute('height', this.height);
            },

            createUniverse: function () {
                this.universe = this.$refs.universe.getContext('2d');
                for (let i = 0; i < this.starCount; i++) {
                    this.stars[i] = new Star(this.universe, this.width, this.height);
                    this.stars[i].reset(this.width, this.height);
                }
            },
            draw: function () {
                this.universe.clearRect(0, 0, this.width, this.height);
                let starsLength = this.stars.length;
                for (let i = 0; i < starsLength; i++) {
                    let star = this.stars[i];
                    star.move(this.width, this.height);
                    star.fadeIn();
                    star.fadeOut(this.width, this.height);
                    star.draw();
                }
                window.requestAnimationFrame(this.draw);
            }
        }

    }
</script>

<style scoped lang="stylus">
    .canvasBox
        min-height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 10%, #020409 100%);


</style>
