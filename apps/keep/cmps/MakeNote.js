import { svgService } from "../../../services/svg.service.js"
import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"

export default {
    template: `
    <div class="make-note">
    <div className="icon-pin" v-html="getSvg('unPin1')"></div>
    <img v-if="this.note.url" :src="this.note.url">
    <input class="title-input" type="text" v-model="note.title" placeholder="Title">
    <input class="take-note" type="text" v-model="note.txt" :placeholder='placeHolder'>
    <div class="make-note-bottom">
        <div class="btns-create">
    <div @click="changeType('NoteTodos')" data-title="New list" className="icon-list" v-html="getSvg('checkBox')"></div>
    <div data-title="New note with drawing"  className="icon-paint" v-html="getSvg('pencil2')"></div>
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
            note: { title: '', txt: '', noteType: 'NoteTxt', url: '' }
        }
    },
    created() {
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
                        })
                    break
                default:
                    break
            }
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
        },
        getNewNote() {
            return { title: '', txt: '', noteType: 'NoteTxt', url: '' }
        }
    },
    computed: {
        placeHolder() {
            if (this.note.noteType === 'NoteTodos') return 'Write list seperated by commas...'
            else return 'Take a note...'
        }
    },
}