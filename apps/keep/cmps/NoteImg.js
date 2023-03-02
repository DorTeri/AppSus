import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <img :src="info.url">
    <h4 contenteditable="true" @click.stop="" ref="imgTitle" @input="updateTitle">{{ info.title }}</h4>
    <h5 contenteditable="true" @click.stop="" ref="imgTxt" @input="updateTxt">{{ info.txt }}</h5>
    `,
    data() {
        return {
            newInfo: this.info
        }
    },
    created() {
        this.debounceUpdateInfo = utilService.debounce(this.updateInfo , 400)
    },
    methods: {
        updateTxt() {
            this.newInfo.txt = this.$refs.imgTxt.innerText
        },
        updateTitle() {
            this.newInfo.title = this.$refs.imgTitle.innerText
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
    }
}