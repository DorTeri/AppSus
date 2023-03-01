import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <img :src="info.url + jpg">
    <h3>{{ info.title }}</h3>
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