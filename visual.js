import { Particle } from "./particle.js";

const TOTAL = 10;

export class Visual {
    constructor(pos, colorCtx, width, height) {
        this.colorCtx = colorCtx;
        this.width = width;
        this.height = height;
        this.pos = pos;
    }

    animate(ctx) {
        for(let i=0; i<TOTAL; i++) {
            const myPos = this.pos[Math.round(Math.random() * (this.pos.length - 1))];
            new Particle(myPos, this.getColor(myPos), ctx);
        }
    }

    getColor(myPos) {
        // const x = Math.round(Math.random() * (this.width - 1));
        // const y = Math.round(Math.random() * (this.height - 1));
        const x = myPos.x //+ Math.round(Math.random() * (10) - 5);
        const y = myPos.y //+ Math.round(Math.random() * (10) - 5);
        const data = this.colorCtx.getImageData(x * this.width / 700, y * this.height / 700, 4, 4).data;
        return `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    }
}
