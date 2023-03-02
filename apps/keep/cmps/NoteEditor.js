import { eventBus } from "../../../services/event-bus.service.js"
import { svgService } from "../../../services/svg.service.js"
import ColorPicker from "./ColorPicker.js"

export default {
    props: ['noteId'],
    template: `
    <section class="note-editor">
    <div @click.stop="openColor = !openColor" className="icon-editor" v-html="getSvg('colorPallet1')"></div>
    <div className="icon-editor" v-html="getSvg('img')"></div>
    <div @click.stop="remove" className="icon-editor" v-html="getSvg('trash')"></div>
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