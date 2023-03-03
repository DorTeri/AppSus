import { emailService } from '../services/email.service.js'

import EmailFilter from '../cmps/EmailFilter.js'
import EmailSideFilter from '../cmps/EmailSideFilter.js'
import EmailList from '../cmps/EmailList.js'

export default {
  template: `
        <section class="email-index">
          <!-- <EmailFilter @filter="setFilterBy" /> -->
          
          <section class="main-mail-layout">
            <EmailSideFilter @filter="setFilterBy"/>
            <EmailList 
             v-if="!isDetails"
            :emails="filteredEmails" 
            @remove="removeEmail"
            @toDetails="toDetails"/>
            <RouterView />
        </section>
        </section>
    `,
  data() {
    return {
      emails: null,
      isDetails: false,
      filterBy: {
        status: 'inbox',
        txt: '', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        // isStared: true, // (optional property, if missing: show all)
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
    removeEmail(emailId) {
      emailService.remove(emailId).then((emailId) => {
        const idx = this.emails.findIndex((email) => email.id === emailId)
        this.emails.splice(idx, 1)
      })
    },
    toDetails({ mailId }) {
      this.$router.push(`mail/${mailId}`)
    },
  },
  computed: {
    filteredEmails() {
      console.log(this.filterBy.status)
      if (!this.emails) return
      let filteredEmails = []
      if (this.filterBy.status === 'starred') {
        console.log('Hello')
        filteredEmails = this.emails.filter((email) => email.isStarred)
      } else {
        filteredEmails = this.emails.filter(
          (email) => email.status === this.filterBy.status)
        }
        console.log(filteredEmails)
        return filteredEmails
    },
  },
  watch: {
    $route: {
      handler(newValue) {
        this.isDetails = newValue.params.id ? true : false
      },
      deep: true,
    },
  },
  components: {
    EmailFilter,
    EmailSideFilter,
    EmailList,
  },
}



//   const regex = new RegExp(this.filterBy.txt, 'i')
        //   return this.emails.filter((email) => regex.test(email.txt))