import NotePreview from "../cmps/NotePreview.js"

import { noteService } from "../services/note.service.js"

export default {
    template: `
    <section v-if="note" class="note-details">
    <NotePreview v-if="note" :note="this.note"/>
    <RouterLink class="close" to="/keep">Close</RouterLink>
    </section>
    `,
    data() {
        return {
            note: null
        }
    },
    created() {
        const { id } = this.$route.params
        noteService.get(id)
            .then(note => {
                this.note = note})
    },
    components: {
        NotePreview
    }
}