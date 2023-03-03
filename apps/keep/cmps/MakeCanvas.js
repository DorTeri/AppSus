import { eventBus } from "../../../services/event-bus.service.js"
import { canvasService } from "../services/canvas.service.js"

export default {
    name: 'MakeCanvas',
    props: ['info'],
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
        eventBus.on('getCanvasUrl', () => {
            const url = this.$refs.canvas.toDataURL('images/jpeg')
            eventBus.emit('canvasUrlUpdated', url)
        })
    },
    mounted() {
        this.ctx = this.$refs.canvas.getContext("2d")
        this.loadCanvas()
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
            const rect = this.$refs.canvas.getBoundingClientRect()
            this.x = ev.clientX - rect.left
            this.y = ev.clientY - rect.top
            this.drawMode = true
        },
        draw(ev) {
            if (this.drawMode) {
                const rect = this.$refs.canvas.getBoundingClientRect()
                this.drawLine(this.x, this.y, ev.offsetX, ev.offsetY)
                this.x = ev.clientX - rect.left
                this.y = ev.clientY - rect.top
            }
        },
        stopDrawing() {
            this.drawMode = false
        },
        loadCanvas() {
            if (this.info) {
                const img = new Image()
                img.src = this.info.canvasUrl
                img.onload = () => {
                    this.ctx.drawImage(img, 0, 0, this.ctx.width, this.ctx.height)
                }
            }
        }
    }
}
// @mousedown="startDraw"
// @mousemove="drawLine"
// @mouseup="stopDraw" 