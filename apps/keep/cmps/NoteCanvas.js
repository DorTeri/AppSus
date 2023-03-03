import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    name: 'NoteCanvas',
    emits: ['updateInfo'],
    props: ['info' , 'editAble'],
    template: `
    <img v-if="!editAble" :src="info.canvasUrl">
    <h4 :contenteditable="editAble"  @click.stop="" ref="canvasTitle" @focusout="updateTitle">{{ info.title }}</h4>
    <h5 :contenteditable="editAble" @click.stop="" ref="canvasTxt" @focusout="updateTxt">{{ info.txt }}</h5>
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
            this.newInfo.txt = this.$refs.canvasTxt.innerText
        },
        updateTitle() {
            this.newInfo.title = this.$refs.canvasTitle.innerText
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