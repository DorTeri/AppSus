import NoteTxt from "./NoteTxt.js"
import NoteImg from "./NoteImg.js"
import NoteVideo from "./NoteVideo.js"
import NoteTodos from "./NoteTodos.js"
import NoteEditor from "./NoteEditor.js"
import NoteCanvas from "./NoteCanvas.js"

import { eventBus } from "../../../services/event-bus.service.js"
import { svgService } from '../../../services/svg.service.js'

export default {
    name: 'NotePreview',
    emits: ['copy' , 'updateInfo', 'updateNoteInfo'],
    props: ['note' , 'edit'],
    template: `
    <article class="note-preview" :style="note.style">
    <Component :is="note.type" :editAble="isEditAble" :info="note.info" @updateInfo="updateNote"></Component>
    <div v-if="note.isPinned" className="icon-pin" v-html="getSvg('pin1')"
    @click.stop="pin">
</div>
<div className="icon-pin" v-if="!note.isPinned" @updateInfo="updateNote" v-html="getSvg('unPin1')"
    @click.stop="pin">
</div>
    <NoteEditor @copy="copyNote" :noteId="note.id"/>
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
        updateNote(info) {
            this.$emit('updateNoteInfo', { toUpdate: info, key: 'info', noteId: this.note.id })
        },
        copyNote(noteId) {
            this.$emit('copyNote' , noteId)
        }
    },
    computed: {
        isEditAble() {
            if(this.edit) return true
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