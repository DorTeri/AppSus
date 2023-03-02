import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <h4>{{ info.title }}</h4>
    <h5 contenteditable="true" @input="updateTxt">{{ info.txt }}</h5>
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
            this.debounceUpdateTxt()
        }
    }
}