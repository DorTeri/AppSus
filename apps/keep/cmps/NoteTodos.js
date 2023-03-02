import { utilService } from "../../../services/util.service.js"
import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <h4 contenteditable="true"  
    @click.stop="" ref="todosTitle" 
    @input="updateTitle">{{ info.title }}</h4>
    <ul>
        <li contenteditable="true" @click.stop="" ref="todo'"
         v-for="(info , idx) in info.todos" @input="updateTodo(idx)">{{info.txt}}</li>
    </ul>
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
        updateTodo(idx) {
            this.newInfo.txt[idx] = this.$refs.idx.innerText
        },
        updateTitle() {
            this.newInfo.title = this.$refs.todosTitle.innerText
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