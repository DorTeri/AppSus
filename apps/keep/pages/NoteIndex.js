import { noteService } from "../services/note.service.js"
import NoteList from "../cmps/NoteList.js"

export default {
    template: `
    <section class="note-index">
    <h1>Note Index</h1>
    <div>
    <input class="take-note" type="text" v-model="note.txt" placeholder="Take a note...">
    <button @click="createNote">Close</button>
    </div>
    <NoteList 
    @remove="removeNote"
    :notes="notes"/>
    </section>
    `,
    data() {
        return {
            note: { txt: '' },
            notes: null
        }
    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        createNote() {
            noteService.save(this.note)
            this.notes.push(this.note)
        },
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                })
        },
    },
    components: {
        NoteList
    }
}