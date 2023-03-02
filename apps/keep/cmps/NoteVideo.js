import NoteEditor from "./NoteEditor.js"


export default {
    props: ['info'],
    template: `
    <video class="video-preview" autoplay loop muted>
    <source :src="info.url" type="video/mp4">
    </video>
    <h4 v-if="info.title">{{ info.title}}</h4>
    <h5 v-if="info.txt">{{ info.txt }}</h5>
    `,
    data() {
        return {

        }
    },
    components: {
        NoteEditor
    }
}