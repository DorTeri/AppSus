import { svgService } from '../../../services/svg.service.js'

export default {
  template: `
        <section class="email-side-filter">
          <!-- Inbox -->
          <div @click="filter('inbox')" className="inbox" 
            v-html="getSvg('inboxFill')"></div>
          <!-- Sent -->
           <div @click="filter('sent')" className="sent" 
            v-html="getSvg('sent')"></div>
          <!-- Trash -->
           <div @click="filter('trash')" className="trash" 
            v-html="getSvg('trash')"> </div>
          <!-- Draft -->
           <div @click="filter('draft')" className="draft" 
            v-html="getSvg('drafts')"></div>
            </section>
            `,
  data() {
    return {
      filterBy: {
        status: 'sent',
        txt: '', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        isStared: true, // (optional property, if missing: show all)
        lables: ['important', 'romantic'], // has any of the labels
      },
    }
  },
  methods: {
    filter() {
      this.$emit('filter', this.filterBy.status)
      console.log('Clicked')
    },
    getSvg(iconName) {
      return svgService.getMailSvg(iconName)
    },
  },
}
