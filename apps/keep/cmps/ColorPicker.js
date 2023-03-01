import { eventBus } from "../../../services/event-bus.service.js"

export default {
    template: `
    <div class="color-picker">
        <div v-for="color in colors" class="color" 
        :style="{'background-color': color}"
        @click="changeColor(color)">
    </div>
    </div>
    `,
    data() {
        return {
            colors: ['#f28b82', '#fbbc04', '#fff475', '#ccff90',
                '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed']
        }
    },
    methods: {
        changeColor(color) {
            eventBus.emit('color' , color)
        }
    }
}