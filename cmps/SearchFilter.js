import { svgService } from '../services/svg.service.js'

export default {
  template: `
        <section class="search-filter">
            <!-- <button><div @click="filter('search')" className="search" 
            v-html="getSvg('search')"></div></button> -->
            <input
            @click="changePath"
                placeholder="Search mail"
                type="text" />
            </section>
            `,
  methods: {
    changePath() {
      this.$router.push('search')
    },

    getSvg(iconName) {
      return svgService.getMailSvg(iconName)
    },
  },
}
