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
    createNoteImg,
    createNoteCanvas,
    createNoteRecording,
    createNoteMap,
}
const colors = ['#f28b82', '#fbbc04', '#fff475', '#ccff90',
'#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed']
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
            title: `I'm a test`,
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
    {
        id: 'n105',
        type: 'NoteAudio',
        isPinned: false,
        info: {
            audioUrl: `http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3`,
            title: 'My first audio',
            txt: 'Dor & Bar audio'
        },
        style: {
            backgroundColor: '#fbbc04'
        }
    },
    {
        id: 'n106',
        type: 'NoteMap',
        isPinned: false,
        info: {
            coords: {lat: 40.712 , lng: -74},
            title: 'Best place',
            txt: 'Have been there'
        },
        style: {
            backgroundColor: '#fbbc04'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Beautiful road'
        },
        style: {
            backgroundColor: '#a7ffeb'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Best photo on my trip'
        },
        style: {
            backgroundColor: '#e6c9a8'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            title: 'My trip'
        },
        style: {
            backgroundColor: '#aecbfa'
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

function createNoteCanvas(note) {
    const newNote = getEmptyNote()
    newNote.type = 'MakeCanvas'
    newNote.info.canvasUrl = note.canvasUrl
    newNote.info.title = note.title
    newNote.info.txt = note.txt
    return storageService.post(NOTE_KEY, newNote)
}

function createNoteRecording(note) {
    const newNote = getEmptyNote()
    newNote.type = 'NoteAudio'
    newNote.info.audioUrl = note.audioUrl
    newNote.info.title = note.title
    newNote.info.txt = note.txt
    return storageService.post(NOTE_KEY, newNote)
}

function createNoteMap(note) {
    const newNote = getEmptyNote()
    newNote.type = 'NoteMap'
    newNote.info.coords = note.coords
    newNote.info.title = note.title
    newNote.info.txt = note.txt
    return storageService.post(NOTE_KEY, newNote)
}