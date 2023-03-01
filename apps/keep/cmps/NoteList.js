import NotePreview from "./NotePreview.js"

export default {
    props: ['notes'],
    template: `
    <!-- <section class="notes-list">
        <div v-for="note in pinnedNotes" :key="note"
            @click.native="$router.push('/keep/' + note.id)">
            <NotePreview :note="note"/>
        </div>
    </section>  -->
    <section class="notes-list">
            <div v-for="note in notes" :key="note.id"
            @click.native="$router.push('/keep/' + note.id)">
                <NotePreview :note="note"/>
            </div>
    </section>
    `,
    data() {
        return {
            // pinnedNotes: [],
            // unPinnedNotes: [],
        }
    },
    created() {
        // this.loadNotes()
    },
    methods: {
        // loadNotes() {
        //     const unPinnedNotes = this.notes.filter(note => !note.isPinned)
        //     const pinnedNotes = this.notes.filter(note => note.isPinned)
        //     this.pinnedNotes = (pinnedNotes)
        //     this.unPinnedNotes = (unPinnedNotes)
        // }
    },
    components: {
        NotePreview
    },
}