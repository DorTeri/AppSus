import NotePreview from "./NotePreview.js"

export default {
    props: ['notes'],
    template: `
    <section class="notes-list">
            <div v-for="note in notes" :key="note.id"
            @click.native="$router.push('/keep/' + note.id)">
                <NotePreview :note="note"/>
            </div>
    </section>
    `,
    data() {
        return {
        }
    },
    methods: {
    },
    components: {
        NotePreview
    },
}