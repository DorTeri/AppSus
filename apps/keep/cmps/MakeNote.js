import { svgService } from "../../../services/svg.service.js"
import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"
import { eventBus } from "../../../services/event-bus.service.js"
import { mapService } from "../services/map.service.js"

import MakeCanvas from './MakeCanvas.js'

export default {
    name: 'MakeNote',
    emits: ['addedNote'],
    template: `
    <div class="make-note">
    <div className="icon-pin" v-html="getSvg('unPin1')"></div>
    <img v-if="this.note.url" :src="this.note.url">
    <MakeCanvas v-if="this.note.noteType === 'MakeCanvas'"/>
    <input class="title-input" type="text" v-model="note.title" placeholder="Title">
    <input class="take-note" type="text" v-model="note.txt" :placeholder='placeHolder'>
    <div class="make-note-bottom">
        <div class="btns-create">
    <div @click="changeType('NoteTodos')" data-title="New list" className="icon-list" v-html="getSvg('checkBox')"></div>
    <div @click="changeType('MakeCanvas')" data-title="New note with drawing"  className="icon-paint" v-html="getSvg('pencil10')"></div>
    <div v-if="mediaRecorder" @click="stopRecord" data-title="Stop record" className="icon-img" v-html="getSvg('stopRecord')"></div>
    <div v-if="!mediaRecorder" @click="record" data-title="New note with audio" className="icon-img" v-html="getSvg('audio')"></div>
    <div @click="changeType('NoteMap')" data-title="New list" className="icon-list" v-html="getSvg('location')"></div>
    <label>
    <div @click="changeType('NoteImg')" data-title="New note with image"  className="icon-img" v-html="getSvg('img')"></div>
    <input class="file" hidden type="file" @change="createImg">
    </label>
    </div>
    <button class="close" @click="createByType">Close</button>
    </div>
    </div>
    `,
    data() {
        return {
            placeholder: '',
            note: { title: '', txt: '', noteType: 'NoteTxt', url: '', canvasUrl: '', audioUrl: '', coords: null },
            isCanvas: false,
            mediaRecorder: null
        }
    },
    created() {
        eventBus.on('canvasUrlUpdated', (url) => {
            this.note.canvasUrl = url
            noteService.createNoteCanvas(this.note)
                .then(() => {
                    this.$emit('addedNote')
                    this.note = this.getNewNote()
                })
        })
    },
    methods: {
        createByType() {
            switch (this.note.noteType) {
                case 'NoteTxt':
                    if (!this.note.txt) return
                    noteService.createNoteTxt(this.note)
                        .then(() => {
                            this.$emit('addedNote')
                            this.note = this.getNewNote()
                            this.$router.push({ query: {} })
                        })
                    break
                case 'NoteTodos':
                    if (!this.note.txt) return
                    noteService.createNoteList(this.note)
                        .then(() => {
                            this.$emit('addedNote')
                            this.note = this.getNewNote()
                        })
                    break
                case 'NoteImg':
                    if (!this.note.url) return
                    noteService.createNoteImg(this.note)
                        .then(() => {
                            this.$emit('addedNote')
                            this.note = this.getNewNote()
                            this.$router.push({ query: {} })
                        })
                    break
                case 'MakeCanvas':
                    eventBus.emit('getCanvasUrl')
                    break
                case 'NoteAudio':
                    noteService.createNoteRecording(this.note)
                        .then(() => {
                            this.$emit('addedNote')
                            this.note = this.getNewNote()
                            this.$router.push({ query: {} })
                        })
                    break
                case 'NoteMap':
                    mapService.codeAddress(this.note.txt)
                        .then(res => this.note.coords = res)
                        .then(this.createMap)
                    break
                default:
                    break
            }
        },
        createMap() {
            noteService.createNoteMap(this.note)
                .then(() => {
                        this.$emit('addedNote')
                        this.note = this.getNewNote()
                        this.$router.push({ query: {} })
                    })
                },
                    createImg(event) {
                    this.note.noteType = 'NoteImg'
            utilService.loadImageFromInput(event)
                        .then(url => this.note.url = url)
                },
                    getSvg(iconName) {
                    return svgService.getSvg(iconName)
                },
                    changeType(type) {
                    this.note.noteType = type
            console.log('this.note.noteType', this.note.noteType)
                },
                    getNewNote() {
                    return { title: '', txt: '', noteType: 'NoteTxt', url: '' }
                },
                    record() {
                    navigator.mediaDevices.getUserMedia({ audio: true })
                        .then(stream => {
                            this.mediaRecorder = new MediaRecorder(stream)
                            this.mediaRecorder.start()

                            const audioChunks = [];

                            this.mediaRecorder.addEventListener("dataavailable", event => {
                                audioChunks.push(event.data)
                            })

                            this.mediaRecorder.addEventListener("stop", () => {
                                const audioBlob = new Blob(audioChunks, { 'type': 'audio/mp3' })
                                const audioUrl = URL.createObjectURL(audioBlob)
                                this.note.audioUrl = audioUrl
                                this.note.noteType = 'NoteAudio'
                            })

                        })
                },
                    stopRecord() {
                    this.mediaRecorder.stop()
            this.mediaRecorder = null
                }
    },
        computed: {
            placeHolder() {
                if (this.note.noteType === 'NoteTodos') return 'Write list seperated by commas...'
                else if (this.note.noteType === 'NoteMap') return 'What is your location'
                else return 'Take a note...'
            },
        },
        watch: {
            '$route.query': {
                immediate: true,
                handler(newVal) {
                    this.note.noteType = 'NoteTxt'
                    this.note.title = newVal.title
                    this.note.txt = newVal.txt
                }
            }
        },
        components: {
            MakeCanvas
        }
    }