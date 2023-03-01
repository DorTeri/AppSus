import NoteTxt from "./NoteTxt.js"
import NoteImg from "./NoteImg.js"
import NoteVideo from "./NoteVideo.js"
import NoteTodos from "./NoteTodos.js"
import { svgService } from "../services/svg.service.js"

export default {
    props: ['note'],
    template: `
    <article class="note-preview" :style="note.style">
    <Component :is="note.type" :info="note.info"
    @changeInfo="updateNote" ></Component>
    <div class="edits">
    
    </div>
    </article>
    `,
    data() {
        return {
            openColor: false
        }
    },
    created() {
    },
    methods: {
        updateNote() {

        },
        changeColor() {

        },
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        }
    },
    components: {
        NoteTodos,
        NoteVideo,
        NoteImg,
        NoteTxt
    }
}