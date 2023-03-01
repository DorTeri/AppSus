import { noteService } from "../services/note.service.js"
import NoteList from "../cmps/NoteList.js"
import { eventBus } from "../../../services/event-bus.service.js"
import NoteEditor from "../cmps/NoteEditor.js"

export default {
    template: `
    <section class="note-index">
    <div class="make-note">
    <h3>Title</h3>
    <input class="take-note" type="text" v-model="newNote.info.txt" placeholder="Take a note...">
    <button class="close" @click="createNote">Close</button>
    </div>
    <NoteList 
    :notes="notes"/>
    </section>
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote(),
            notes: null,
            filterBy: {}
        }
    },
    created() {
        eventBus.on('updateNote', (changeObj) => {
            const note = this.notes.find(note => note.id === changeObj.noteId)
            note[changeObj.key] = changeObj.toUpdate
            noteService.save(note)
        })
        eventBus.on('save', (note) => noteService.save(note))
        eventBus.on('removeNote' , (noteId) => this.removeNote(noteId))
        noteService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        createNote() {
            if(!this.newNote.info.txt) return
            noteService.save(this.newNote)
            this.notes.push(this.newNote)
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
        NoteList,
        NoteEditor
    }
}