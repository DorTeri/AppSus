import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <h2>{{ info.title }}</h2>
    <ul>
        <li v-for="info in info.todos">{{info.txt}}</li>
    </ul>
    <NoteEditor />
    `,
    data() {
        return {

        }
    },
    components: {
        NoteEditor
    }
}