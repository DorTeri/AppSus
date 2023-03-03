import NotePreview from "../cmps/NotePreview.js"

import { eventBus } from "../../../services/event-bus.service.js"
import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"

export default {
    name: 'NoteDetails',
    emits: ['updateNoteInfo', 'removeNote'],
    template: `
    <section v-if="note" class="note-details">
    <NotePreview @updateNoteInfo="update" :edit="true" v-if="note" :note="this.note"/>
    <RouterLink class="close" to="/keep">Close</RouterLink>
    </section>
    `,
    data() {
        return {
            note: null
        }
    },
    created() {
        this.loadNote()
        eventBus.on('removeNote', () => {
            this.note = null
        })
    },
    methods: {
        loadNote() {
            const { id } = this.$route.params
            noteService.get(id)
                .then(note => {
                    this.note = note
                })
        },
        update(changeObj) {
            console.log(changeObj)
            this.note[changeObj.key] = changeObj.toUpdate
            noteService.save(this.note)
                .then(eventBus.emit('noteUpdated'))
        }
    },
    components: {
        NotePreview
    },
}