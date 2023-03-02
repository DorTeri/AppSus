import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <h4 contenteditable="true"  @click.stop="" ref="txtTitle" @input="updateTitle">{{ info.title }}</h4>
    <h5 contenteditable="true" @click.stop="" ref="txtTxt" @input="updateTxt">{{ info.txt }}</h5>
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
            this.newInfo.txt = this.$refs.txtTxt.innerText
        },
        updateTitle() {
            this.newInfo.title = this.$refs.txtTitle.innerText
        },
        updateInfo() {
            this.$emit('updateInfo' , this.newInfo)
        }
    },
    watch: {
        info: {
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