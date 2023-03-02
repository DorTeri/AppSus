import NoteEditor from "./NoteEditor.js"

export default {
    props: ['info'],
    template: `
    <img :src="info.url">
    <h4 contenteditable="true" @click.stop="">{{ info.title }}</h4>
    <h5 contenteditable="true" @click.stop="">{{ info.txt }}</h5>
    `,
    data() {
        return {

        }
    },
    components: {
        NoteEditor
    }
}