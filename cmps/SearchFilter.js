import { svgService } from '../services/svg.service.js'
import { eventBus } from '../services/event-bus.service.js'

export default {
  template: `
        <section class="search-filter">
            <input class="header-search-input"
            @click="searchClicked"
            @input="sendSearch" v-model="txt"
                placeholder="Search mail"
                type="text" />
            </section>
            `,
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName)
    },
    sendSearch() {
      eventBus.emit('search' , this.txt)
    },
    searchClicked() {
      eventBus.emit('searchClicked')
    }
  },
}
