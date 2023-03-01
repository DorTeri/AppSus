import { eventBus } from "../../../services/event-bus.service.js"
import { svgService } from "../../../services/svg.service.js"
import ColorPicker from "./ColorPicker.js"

export default {
    props: ['noteId'],
    template: `
    <section class="note-editor">
    <img @click="openColor = !openColor" style="width:24px; height:24px" :src="getSvg('colorPallet')" alt="" />
    <div className="icon" v-html="getSvg('img')"></div>
    <div className="icon" v-html="getSvg('archive')"></div>
    <div @click="remove" className="icon" v-html="getSvg('trash')"></div>
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
            eventBus.emit('updateNote' , {noteId: this.noteId , toUpdate: color , key: 'style'})
        },
        remove() {
            eventBus.emit('removeNote' , this.noteId)
        }
    },
    components: {
        ColorPicker
    }
}