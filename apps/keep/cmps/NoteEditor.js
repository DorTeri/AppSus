import { eventBus } from "../../../services/event-bus.service.js"
import { svgService } from "../../../services/svg.service.js"
import ColorPicker from "./ColorPicker.js"

export default {
    props: ['noteId'],
    template: `
    <section class="note-editor">
    <div className="icon" v-html="getSvg('bell')"></div>
    <img @click="openColor = !openColor" style="width:24px; height:24px" :src="getSvg('colorPallet')" alt="" />
    <div className="icon" v-html="getSvg('img')"></div>
    <div className="icon" v-html="getSvg('archive')"></div>
    <img style="width:24px; height:24px" :src="getSvg('more')" alt="" />
    </section>
    <ColorPicker @color="changeColor" v-show="openColor"/>
    `,
    data() {
        return {
            openColor: false
        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
        changeColor(color) {
            eventBus.emit('colorChange' , {noteId: this.noteId , color})
        }
    },
    components: {
        ColorPicker
    }
}