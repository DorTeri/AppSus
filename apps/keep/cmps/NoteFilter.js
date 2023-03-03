import { svgService } from "../../../services/svg.service.js"
import { eventBus } from "../../../services/event-bus.service.js"

export default {
    template: `
    <section class="filter-keep">
    <h4>Types</h4>
    <div class="filter-types">
    <div @click="filterBy.noteType = 'NoteTodos'" className="icon" v-html="getSvg('bars')"></div>
    <div @click="filterBy.noteType = 'NoteImg'" className="icon" v-html="getSvg('img')"></div>
    <div @click="filterBy.noteType = 'NoteCanvas'" className="icon" v-html="getSvg('pencil2')"></div>
    </div>
    <button class="closeSearch" @click="closeSearch">X</button>
    </section>
    `,
    data() {
        return {
            filterBy: { txt: '', noteType: '' }
        }
    },
    created() {
        eventBus.on('search', (txt) => this.filterBy.txt = txt)
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        },
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
        closeSearch() {
            this.$emit('closeSearch')
        }
    },
    watch: {
        filterBy: {
            handler() {
                this.$emit('filter', this.filterBy)
            },
            deep: true
        },
    }
}