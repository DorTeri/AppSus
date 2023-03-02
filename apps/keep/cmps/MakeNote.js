import { svgService } from "../../../services/svg.service.js"
import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"

export default {
    template: `
    <div class="make-note">
    <input type="text" v-model="note.title" placeholder="Title">
    <div class="input-line">
    <input class="take-note" type="text" v-model="note.txt" :placeholder='placeHolder'>
    <button @click="changeType('NoteTodos')" data-title="New list" class="btn-create"><div className="icon" v-html="getSvg('checkBox')"></div></button>
    <button data-title="New note with drawing" class="btn-create"><div className="icon" v-html="getSvg('pencil2')"></div></button>
    <label >
    <input hidden type="file" @change="createImg">
    <div data-title="New note with image" class="btn-create" className="icon-create" v-html="getSvg('img')"></div>
    </label>
    </div>
    <button class="close" @click="createByType">Close</button>
    </div>
    `,
    data() {
        return {
            placeholder: '',
            note: {title: '', txt: '', noteType: 'NoteTxt' }
        }
    },
    created() {
    },
    methods: {
        createByType() {
            if (!this.note.txt) return
            switch (this.note.noteType) {
                case 'NoteTxt':
                    noteService.createNoteTxt(this.note)
                        .then(() => {
                            this.$emit('addedNote')
                            this.note.txt = ''
                        })
                    break
                case 'NoteTodos':
                    noteService.createNoteList(this.note)
                        .then(() => {
                            this.$emit('addedNote')
                            this.note.txt = ''
                        })
                    break
                default:
                    break
            }
        },
        createImg() {
            this.note.noteType = 'NoteImg'
            const some = utilService.loadImageFromInput(event)
            console.log('some', some)
        },
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
        changeType(type) {
            this.note.noteType = type
        }
    },
    computed: {
        placeHolder() {
            if (this.note.noteType === 'NoteTodos') return 'Write list seperated by commas...'
            else return 'Take a note...'
        }
    },
}