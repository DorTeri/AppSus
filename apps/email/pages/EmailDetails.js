import { emailService } from '../services/email.service.js'
// import { eventBusService } from '../services/event-bus.service.js'

export default {
  template: `
        <section class="email-details" v-if="email">
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
    const {id}  = this.$route.params
    console.log(id)
    emailService.get(id).then((email) => {
      this.email = email
    })
  },
  methods: {},
  computed: {},
  components: {
    emailService,
  },
}
