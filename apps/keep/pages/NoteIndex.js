import NoteList from "../cmps/NoteList.js"
import NoteEditor from "../cmps/NoteEditor.js"
import MakeNote from "../cmps/MakeNote.js"

import { noteService } from "../services/note.service.js"
import { eventBus } from "../../../services/event-bus.service.js"

export default {
    template: `
    <section class="main-layout">
    <section class="note-index">
    <MakeNote @addedNote="loadNotes"/>
    <NoteList 
    @saveNote="save"
    :notes="notes"/>
    <RouterView />
    </section>
    </section>
    `,
    data() {
        return {
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
        eventBus.on('removeNote', (noteId) => this.removeNote(noteId))
        this.loadNotes()
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                })
        },
        loadNotes() {
            noteService.query()
            .then(notes => this.notes = notes)
        },
        save(note) {
            noteService.save(note)
        }
    },
    components: {
        NoteList,
        NoteEditor,
        MakeNote
    }
}