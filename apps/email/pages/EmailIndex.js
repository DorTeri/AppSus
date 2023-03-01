import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailSideFilter from '../cmps/EmailSideFilter.js'
import EmailList from '../cmps/EmailList.js'


export default {
  template: `
        <section class="email-index">
          <EmailFilter @filter="setFilterBy" />
          <EmailSideFilter @filter="setFilterBy" />
          <EmailList 
          v-if="emails"
          :emails="filteredEmails" />
        </section>
    `,
  data() {
    return {
      emails: null,
      filterBy: {
        status: 'inbox/sent/trash/draft',
        txt: '', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        isStared: true, // (optional property, if missing: show all)
        lables: ['important', 'romantic'], // has any of the labels
      },
    }
},
created() {
  emailService.query().then((emails) => (this.emails = emails))
},
  methods: {
    setFilterBy(filterBy) {
      this.filterBy.status = filterBy
    },
  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.txt, 'i')
      return this.emails.filter((email) => regex.test(email.txt))
    },
  },
  components: {
    EmailFilter,
    EmailSideFilter,
    EmailList,
  },
}
