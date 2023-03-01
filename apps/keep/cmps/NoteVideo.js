import NoteEditor from "./NoteEditor.js"


export default {
    props: ['info'],
    template: `
    <video class="video-preview" autoplay loop muted>
    <source :src="info.url" type="video/mp4">
    </video>
    <h3>{{ info.title}}</h3>
    `,
    data() {
        return {

        }
    },
    components: {
        NoteEditor
    }
}