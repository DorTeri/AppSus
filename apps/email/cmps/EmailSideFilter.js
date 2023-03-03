import { svgService } from '../../../services/svg.service.js'

import EmailComposed from '../cmps/EmailCompose.js'

export default {
  props: ['emails'],
  template: `
        <section class="email-side-filter">
        <EmailComposed @close="isCompose = false"
        v-if="isCompose"/>
        <!-- Compose -->
        <section @click="isCompose = true" class="filter-section compose-icon">
          <div className="compose" 
            v-html="getSvg('compose')"></div>
            <span>Compose</span>
         </section>

          <!-- Inbox -->
          <section @click="filter('inbox')" class="filter-section-svg">
          <div className="inbox" 
            v-html="getSvg('inboxFill')"></div>
            <span>Inbox</span>
         </section>

           <!-- Starred -->
           <section @click="filter('starred')" class="filter-section-svg">
          <div className="star" 
            v-html="getSvg('star')"></div>
            <span>Starred</span>
         </section>
            
          <!-- Sent -->
          <section @click="filter('sent')" class="filter-section-svg">
           <div className="sent" 
            v-html="getSvg('sent')"></div>
            <span>Sent</span>
            </section>
            <!-- Draft -->
            <section @click="filter('draft')" class="filter-section-svg">
              <div className="draft" 
              v-html="getSvg('drafts')"></div>
              <span>Drafts</span>
            </section>
            <!-- Trash -->
          <section @click="filter('trash')" class="filter-section-svg">
           <div className="trash" 
            v-html="getSvg('trash')"></div>
            <span>Trash</span>
            </section>
            </section>
            `,
  data() {
    return {
      isCompose: false,
      filterBy: {
        status: 'inbox',
        txt: '', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        isStared: true, // (optional property, if missing: show all)
        lables: ['important', 'romantic'], // has any of the labels
      },
    }
  },
  methods: {
    filter(status) {
      this.filterBy.status = status
      this.$emit('filter', this.filterBy.status)
      console.log('Clicked')
    },
    getSvg(iconName) {
      return svgService.getMailSvg(iconName)
    },
    getUnreadCount() {
      let counter = 0
      console.log(counter)
      this.emails.forEach(email => email.isRead === true)
    },
  },
  components: {
  EmailComposed,
  },

}
