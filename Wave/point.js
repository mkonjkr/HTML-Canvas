'use strict';

export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.03;
        this.cur = index;
        // max value of moving range
        this.max = Math.random() * 100 + 150; 
    }

    update() {
        // 현재값을 항상 스피드 만큼 더해주고
        this.cur += this.speed;
        // sin함수로 아래위로 움직이게
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}