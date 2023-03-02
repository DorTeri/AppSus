import { eventBus } from "../../../services/event-bus.service.js"
import { canvasService } from "../services/canvas.service.js"

export default {
    name: 'MakeCanvas',
    template: `
    <div class="canvas-container">
    <canvas 
    class="canvas-edit"
    @mousedown="startDraw"
    @mousemove="draw"
    @mouseup="stopDrawing"
     ref="canvas"></canvas>
    </div>
    `,
    data() {
        return {
            ctx: null,
            drawMode: false,
                x: null,
                y: null,
            selectedShape: 'rect'
        }
    },
    created() {
        this.ctx = null
        eventBus.on('getCanvasUrl', () => {
            const url = this.$refs.canvas.toDataURL('images/jpeg')
            eventBus.emit('canvasUrlUpdated', url)
            this.$refs.canvas = null
            this.ctx = null
        })
    },
    mounted() {
        this.ctx = this.$refs.canvas.getContext("2d")
    },
    methods: {
        drawLine(x1, y1, x2, y2) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'black';
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            this.ctx.closePath();
        },
        drawShape(ev) {
            if (this.selectedShape === 'rect') canvasService.drawRect(ev, this.ctx)
        },
        startDraw(ev) {
            this.x = ev.offsetX
            this.y = ev.offsetY
            this.drawMode = true
        },
        draw(ev) {
            if (this.drawMode) {
                this.drawLine(this.x, this.y, ev.offsetX, ev.offsetY);
                this.x = ev.offsetX;
                this.y = ev.offsetY;
            } else console.log('not drow mode')
        },
        stopDrawing() {
            this.drawMode = false
        },
    }
}
// @mousedown="startDraw"
// @mousemove="drawLine"
// @mouseup="stopDraw" 