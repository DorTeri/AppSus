export default {
    name: 'NoteCanvas',
    template: `
    <div v-if="isCanvas" class="canvas-container">
    <canvas @mousedown="startDraw"
     @mousemove="drawLine"
     @mouseup="stopDraw" 
     ref="canvas"></canvas>
    </div>
    `,
    data() {
        return {
            ctx: null,
            drawMode: false,
            startPosition: {
                x: null,
                y: null
            }
        }
    },
    methods: {
        startDraw(e) {
            this.drawMode = true;
            this.startPosition.x = e.clientX;
            this.startPosition.y = e.clientY;
        },
        drawLine(e) {
            if(this.drawMode) {
                this.ctx.beginPath()
                this.ctx.moveTo(this.startPosition.x ,
                     this.startPosition.y)
            }
        }
    },
    mounted() {
        this.$refs.canvas.height = window.innerHeight;
        this.$refs.canvas.width = window.innerWidth;
        this.ctx = this.$refs.canvas.getContext("2d");
    },
}