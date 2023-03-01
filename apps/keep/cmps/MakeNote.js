import { svgService } from "../../../services/svg.service.js"
import { noteService } from "../services/note.service.js"

export default {
    template: `
    <div class="make-note">
    <h3>Title</h3>
    <div class="input-line">
    <input class="take-note" type="text" v-model="txt" placeholder="Take a note...">
    <button data-title="New list" class="btn-create"><div className="icon" v-html="getSvg('checkBox')"></div></button>
    <button class="btn-create"><div className="icon" v-html="getSvg('pencil2')"></div></button>
    <button class="btn-create"><div className="icon" v-html="getSvg('img')"></div></button>
    </div>
    <button class="close" @click="createNote">Close</button>
    </div>
    `,
    data() {
        return {
            placeholder: '',
            txt: '',
            noteType: 'NoteTxt'
        }
    },
    methods: {
        createNote() {
            if (!this.txt) return
            const newNote = noteService.getEmptyNote()
            newNote.info.txt = this.txt
            noteService.save(newNote)
                .then(() => {
                    this.$emit('addedNote')
                    this.txt = ''
                })
        },
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        }
    }
}