import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

const NOTE_KEY = 'notesDB'

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    createNoteTxt,
    createNoteList,
    createNoteImg
}

const notes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#f28b82'
        },
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#fbbc04'
        }
    },
    {
        id: 'n103',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: '#fff475'
        }
    },
    {
        id: 'n104',
        type: 'NoteVideo',
        isPinned: false,
        info: {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#fbbc04'
        }
    },
]

makeNotes()
function makeNotes() {
    if (!utilService.loadFromStorage(NOTE_KEY)) utilService.saveToStorage(NOTE_KEY, notes)
    else return
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
    // .then(note => {
    //     if (filterBy.txt) {
    //         const regex = new RegExp(txt, 'i')
    //         notes = notes.filter(note => regex.test(book.title))
    //     }
    //     if (filterBy.maxPrice) {
    //         books = books.filter(book => book.listPrice <= filterBy.maxPrice)
    //     }
    //     return books
    // })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote() {
    return {
        id: '', info: { txt: '' },
        style: { backgroundColor: '#fff' }, isPinned: false,
        type: 'NoteTxt'
    }
}

function createNoteTxt(note) {
    const newNote = getEmptyNote()
    newNote.info.txt = note.txt
    newNote.type = note.noteType
    newNote.info.title = note.title
    return storageService.post(NOTE_KEY, newNote)
}

function createNoteList(note) {
    const newNote = getEmptyNote()
    const list = note.txt.split(',')
    newNote.info.todos = list.map(txt => ({txt: txt, doneAt: null})) 
    newNote.type = note.noteType
    newNote.info.title = note.title
    return storageService.post(NOTE_KEY, newNote)
}

function createNoteImg(note) {
    const newNote = getEmptyNote()
    newNote.type = note.noteType
    newNote.info.url = note.url
    newNote.info.title = note.title
    newNote.info.txt = note.txt
    return storageService.post(NOTE_KEY, newNote)
}