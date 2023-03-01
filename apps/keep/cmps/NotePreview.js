import NoteTxt from "./NoteTxt.js"
import NoteImg from "./NoteImg.js"
import NoteVideo from "./NoteVideo.js"
import NoteTodos from "./NoteTodos.js"
import NoteEditor from "./NoteEditor.js"

import { eventBus } from "../../../services/event-bus.service.js"
import { svgService } from "../services/svg.service.js"

export default {
    props: ['note'],
    template: `
    <article class="note-preview" :style="note.style">
    <Component :is="note.type" :info="note.info"></Component>
    
    <NoteEditor :noteId="note.id"/>
    </article>
    `,
    data() {
        return {
        }
    },
    created() {
        eventBus.on('change' , (color) => {
            eventBus.emit('updateNote' , {color , noteId: this.note.id})
        })
    },
    methods: {
    },
    components: {
        NoteTodos,
        NoteVideo,
        NoteImg,
        NoteTxt,
        NoteEditor
    }
}