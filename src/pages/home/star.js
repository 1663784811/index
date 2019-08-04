function getProbability(percents) {
    return ((Math.floor(Math.random() * 1000) + 1) < percents * 10);
}

function getRandInterval(min, max) {
    return (Math.random() * (max - min) + min);
}


/**
 * 星星类
 * @param cometColor
 * @param starColor
 * @constructor
 */
export const Star = function (universe, width, height) {
    this.reset = function (width, height) {
        this.giant = getProbability(3);
        this.comet = this.giant ? false : getProbability(10);
        this.x = getRandInterval(0, width - 10);
        this.y = getRandInterval(0, height);
        this.r = getRandInterval(1.1, 2.6);
        this.dx = getRandInterval(.05, 6 * .05) + (this.comet + 1 - 1) * .05 * getRandInterval(50, 120) + .05 * 2;
        this.dy = -getRandInterval(.05, 6 * .05) - (this.comet + 1 - 1) * .05 * getRandInterval(50, 120);
        this.fadingOut = null;
        this.fadingIn = true;
        this.opacity = 0;
        this.opacityTresh = getRandInterval(.2, 1 - (this.comet + 1 - 1) * .4);
        this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * .001;
    };

    this.fadeIn = function () {
        if (this.fadingIn) {
            this.fadingIn = this.opacity > this.opacityTresh ? false : true;
            this.opacity += this.do;
        }
    };
    this.fadeOut = function (width, height) {
        if (this.fadingOut) {
            this.fadingOut = this.opacity < 0 ? false : true;
            this.opacity -= this.do / 2;
            if (this.x > width || this.y < 0) {
                this.fadingOut = false;
                this.reset(width, height);
            }
        }
    };

    this.draw = function () {
        universe.beginPath();
        if (this.giant) {
            universe.fillStyle = 'rgba(180,184,240,' + this.opacity + ')';
            universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
        } else if (this.comet) {
            universe.fillStyle = 'rgba(226,225,224,' + this.opacity + ')';
            universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
            //comet tail
            for (var i = 0; i < 30; i++) {
                universe.fillStyle = 'rgba(226,225,224,' + (this.opacity - (this.opacity / 20) * i) + ')';
                universe.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
                universe.fill();
            }
        } else {
            //画矩形
            universe.fillStyle = 'rgba( 226,225,142 ,' + this.opacity + ')';
            universe.rect(this.x, this.y, this.r, this.r);
        }

        universe.closePath();
        universe.fill();
    };
    this.move = function (width, height) {
        this.x += this.dx;
        this.y += this.dy;
        if (this.fadingOut === false) {
            this.reset(width, height);
        }
        if (this.x > width - (width / 4) || this.y < 0) {
            this.fadingOut = true;
        }
    };
};