import NoteTxt from "./NoteTxt.js"
import NoteImg from "./NoteImg.js"
import NoteVideo from "./NoteVideo.js"
import NoteTodos from "./NoteTodos.js"
import NoteEditor from "./NoteEditor.js"

import { eventBus } from "../../../services/event-bus.service.js"
import { svgService } from '../../../services/svg.service.js'

export default {
    props: ['note'],
    template: `
    <article class="note-preview" :style="note.style">
    <Component :is="note.type" :info="note.info"></Component>
    <i class="fa-solid fa-thumbtack icon-pin"
    @click="pin"
    :class="{pinned: note.isPinned}"></i>
    <NoteEditor :noteId="note.id"/>
    </article>
    `,
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
        pin() {
            this.note.isPinned = !this.note.isPinned
            eventBus.emit('save' , this.note)
        }
    },
    components: {
        NoteTodos,
        NoteVideo,
        NoteImg,
        NoteTxt,
        NoteEditor
    }
}