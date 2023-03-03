import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    name: 'NoteAudio',
    emits: ['updateInfo'],
    props: ['info' , 'editAble'],
    template: `
    <h4 :contenteditable="editAble"  @click.stop="" ref="audioTitle" @focusout="updateTitle">{{ info.title }}</h4>
    <h5 :contenteditable="editAble" @click.stop="" ref="audioTxt" @focusout="updateTxt">{{ info.txt }}</h5>
    <audio controls>
    <source :src="info.audioUrl" type="audio/ogg">
    </audio>
    `,
    data() {
        return {
            color: null ,
            newInfo: this.info
        }
    },
    created() {
        this.debounceUpdateInfo = utilService.debounce(this.updateInfo , 400)
    },
    methods: {
        updateTxt() {
            this.newInfo.txt = this.$refs.audioTxt.innerText
        },
        updateTitle() {
            this.newInfo.title = this.$refs.audioTitle.innerText
        },
        updateInfo() {
            this.$emit('updateInfo' , this.newInfo)
        }
    },
    watch: {
        newInfo: {
            handler() {
                this.debounceUpdateInfo()
            },
            deep: true
        }
    },
    components: {
        NoteEditor
    },
}