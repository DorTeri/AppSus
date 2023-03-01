import { emailService } from '../services/email.service.js'
// import { eventBusService } from '../services/event-bus.service.js'

export default {
  template: `
        <section class="email-details">
              <p>{{email.subject}}</p>
              <p>{{email.from}}</p>
              <p>{{email.sentAt}}</p>
              <p>{{email.body}}</p>
        </section>
    `,
  data() {
    return {
      email: null,
    }
  },
  created() {
    const { emailId } = this.$route.params
    emailService.get(emailId).then((email) => (this.email = email))
    // console.log(email)
    console.log(this.email)
  },
  methods: {
   

  },
  computed: {
  
},
  components: {
    emailService,
  },
}
