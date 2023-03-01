import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <img :src="info.url">
    <h3>{{ info.title }}</h3>
    `,
    data() {
        return {

        }
    },
    components: {
        NoteEditor
    }
}