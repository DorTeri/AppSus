import { eventBus } from "../../../services/event-bus.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <h3 contenteditable="true">{{ info.txt }}</h3>
    <NoteEditor/>
    `,
    data() {
        return {
            color: null 
        }
    },
    created() {
    },
    components: {
        NoteEditor
    }
}