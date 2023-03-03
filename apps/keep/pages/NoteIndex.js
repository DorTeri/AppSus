import NoteList from "../cmps/NoteList.js"
import NoteEditor from "../cmps/NoteEditor.js"
import MakeNote from "../cmps/MakeNote.js"
import NoteFilter from "../cmps/NoteFilter.js"

import { noteService } from "../services/note.service.js"
import { eventBus } from "../../../services/event-bus.service.js"

export default {
    name: 'NoteIndex',
    emits: ['noteUpdated'],
    template: `
    <section class="main-layout">
    <section class="note-index">
    <NoteFilter v-if="false" @filter="setFilterBy"
    @closeSearch="this.searchOpen = false"/>
    <MakeNote  @addedNote="loadNotes"/>
    <NoteList 
    @copyNote="makeCopy"
    @saveNote="save"
    :notes="notesToPreview"/>
    <RouterView />
    </section>
    </section>
    `,
    data() {
        return {
            notes: null,
            filterBy: {},
            searchOpen: false
        }
    },
    created() {
        eventBus.on('searchClicked', () => this.searchOpen = true)
        eventBus.on('updateNoteInfo', (changeObj) => this.update(changeObj))
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
            return noteService.save(note)
        },
        makeCopy(noteId) {
            const note = this.notes.find(note => note.id === noteId)
            const newNote = JSON.parse(JSON.stringify(note))
            newNote.id = null
            this.save(newNote)
                .then(this.loadNotes)
        },
        update(changeObj) {
            const note = this.notes.find(note => note.id === changeObj.noteId)
            note[changeObj.key] = changeObj.toUpdate
            noteService.save(note)
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        notesToPreview() {
            if (this.notes) {
                const txtReg = new RegExp(this.filterBy.txt, 'i')
                const typeReg = new RegExp(this.filterBy.noteType, 'i')
                return this.notes.filter(note => txtReg.test(note.info.title)
                    && typeReg.test(note.noteType))
            }
        }
    },
    components: {
        NoteList,
        NoteEditor,
        MakeNote,
        NoteFilter
    }
}