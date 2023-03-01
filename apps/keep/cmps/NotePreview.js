import NoteTxt from "./NoteTxt.js"
import NoteImg from "./NoteImg.js"
import NoteVideo from "./NoteVideo.js"
import NoteTodos from "./NoteTodos.js"

import { eventBus } from "../../../services/event-bus.service.js"
import { noteService } from "../services/note.service.js"

export default {
    props: ['note'],
    template: `
    <article class="note-preview" :style="note.style">
    <Component :is="note.type" :info="note.info"
    @changeInfo="updateNote" ></Component>
    </article>
    `,
    data() {
        return {
            updatedNote: this.note
        }
    },
    created() {
        eventBus.on('color', (color) => {
            this.updatedNote.style = {'backgroundColor': color}
            this.updateNote(this.updatedNote)
        })
    },
    methods: {
        updateNote() {
            noteService.save(this.updatedNote)
        },
    },
    components: {
        NoteTodos,
        NoteVideo,
        NoteImg,
        NoteTxt
    }
}