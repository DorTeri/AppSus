import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <h4>{{ info.title }}</h4>
    <ul>
        <li v-for="info in info.todos">{{info.txt}}</li>
    </ul>
    `,
    data() {
        return {

        }
    },
    components: {
        NoteEditor
    }
}