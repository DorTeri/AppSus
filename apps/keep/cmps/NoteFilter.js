import { svgService } from "../../../services/svg.service.js"
import { eventBus } from "../../../services/event-bus.service.js"

export default {
    template: `
    <section class="filter-keep">
    <h4>Types</h4>
    <div class="filter-types">
    <div @click="filterBy.noteType = 'NoteTodos'" class="wrap-icon">
        <div className="icon" v-html="getSvg('menuFilter')"></div>
        <p>Lists</p>
    </div>
    <div @click="filterBy.noteType = 'NoteImg'" class="wrap-icon">
        <div className="icon" v-html="getSvg('imageFilter')"></div>
        <p>Images</p>
    </div>
    <div @click="filterBy.noteType = 'NoteCanvas'" class="wrap-icon">
        <div className="icon" v-html="getSvg('pencilFilter')"></div>
        <p>Drawings</p>
    </div>
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
        eventBus.on('filterTxt', (txt) => this.filterBy.txt = txt)
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        },
        getSvg(iconName) {
            return svgService.getSvg(iconName)
        },
        closeSearch() {
            this.filterBy.noteType = ''
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