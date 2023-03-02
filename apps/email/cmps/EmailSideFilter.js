import { svgService } from '../../../services/svg.service.js'

export default {
  template: `
        <section class="email-side-filter">
        <!-- Compose -->
        <section class="filter-section compose-icon">
          <div @click="filter('compose')" className="compose" 
            v-html="getSvg('compose')"></div>
            <span>Compose</span>
         </section>

          <!-- Inbox -->
          <section class="filter-section-svg">
          <div @click="filter('inbox')" className="inbox" 
            v-html="getSvg('inboxFill')"></div>
            <span>Inbox</span>
         </section>

           <!-- Starred -->
           <section class="filter-section-svg">
          <div @click="filter('star')" className="star" 
            v-html="getSvg('star')"></div>
            <span>Starred</span>
         </section>
            
          <!-- Sent -->
          <section class="filter-section-svg">
           <div @click="filter('sent')" className="sent" 
            v-html="getSvg('sent')"></div>
            <span>Sent</span>
            </section>
            <!-- Draft -->
            <section class="filter-section-svg">
              <div @click="filter('draft')" className="draft" 
              v-html="getSvg('drafts')"></div>
              <span>Drafts</span>
            </section>
            <!-- Trash -->
          <section class="filter-section-svg">
           <div @click="filter('trash')" className="trash" 
            v-html="getSvg('trash')"></div>
            <span>Trash</span>
            </section>
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