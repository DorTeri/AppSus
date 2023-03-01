import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <h3 contenteditable="true" ref="txt">{{ info.txt }}</h3>
    `,
    data() {
        return {
            color: null ,
            txt: this.info.txt
        }
    },
    created() {
        this.debounceUpdateTxt = utilService.debounce(this.updateTxt , 400)
    },
    components: {
        NoteEditor
    },
    methods: {
        updateTxt() {
            this.$emit('updateTxt' , this.txt)
        }
    },
    watch: {
        txt() {
            console.log('this.txt', this.txt)
            this.debounceUpdateTxt()
        }
    }
}