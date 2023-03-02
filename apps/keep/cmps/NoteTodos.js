import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    name: 'NoteTodos',
    emits: ['updateInfo'],
    props: ['info', 'editAble'],
    template: `
    <h4 :contenteditable="editAble"  
    @click.stop="" ref="todosTitle" 
    @input="updateTitle">{{ info.title }}</h4>
    <ul>
        <li :contenteditable="editAble" @click.stop="" ref="indo.id"
         v-for="(info , idx) in info.todos" @input="updateTodo(idx , info.id)">{{info.txt}}</li>
    </ul>
    `,
    data() {
        return {
            newInfo: this.info,
        }
    },
    created() {
        this.debounceUpdateInfo = utilService.debounce(this.updateInfo , 400)
    },
    methods: {
        updateTodo(idx , infoId) {
            this.newInfo.txt[idx] = this.$refs[infoId].innerText
            // this.newInfo.txt[idx] = this.$refs.idx.innerText
        },
        updateTitle() {
            this.newInfo.title = this.$refs.todosTitle.innerText
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
    }
}