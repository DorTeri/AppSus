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
    <div v-if="note.isPinned" className="icon-pin" v-html="getSvg('pin1')"
    @click.stop="pin"
    @updateTxt="updateNoteTxt">
</div>
<div className="icon-pin" v-if="!note.isPinned" v-html="getSvg('unPin1')"
    @click.stop="pin"
    @updateTxt="updateNoteTxt">
</div>
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
            this.$emit('save', this.note)
        },
        updateNoteTxt(txt) {
            console.log('2')
            eventBus.emit('updateNote', { toUpdate: txt, key: 'info.txt', noteId: this.note.id })
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