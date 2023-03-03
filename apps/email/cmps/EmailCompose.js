import { svgService } from '../../../services/svg.service.js'
import { emailService } from '../services/email.service.js'
import { eventBus } from '../../../services/event-bus.service.js'


export default {
  props:['noteInfo'],
  template: `
    <section class="compose-section">
        <!-- Compose -->
      <form @submit.prevent="composeEmail" @focusout="saveDraft" class="compose-new">
          <div class="New-msg">New Message<span @click="closeCompose" class="exit-btn">✖</span></div>
            <input class="compose-input" v-model="email.to" placeholder="Recipients" type="text" />
            <input class="compose-input" v-model="email.subject" placeholder="Subject" type="text" />
            <hr>
            <input class="compose-input-body" v-model="email.body" type="text" />
            <section class="send-trash-btns"><button>Send</button></section>
            </form>
</section>
            `,
  data() {
    return {
      email: emailService.getEmptyEmail(),
      isSending: false,
    }
  },
  created() {
    if(this.noteInfo) {
      this.email.subject = this.noteInfo.subject
      this.email.body = this.noteInfo.body
    }
  },
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName)
    },
    composeEmail() {
      this.isSending = true
      this.email.status = 'sent'
      emailService.save(this.email)
      this.closeCompose()
      this.$router.push({query: {}})
      //   this.$emit('saveEmail',emailId)
    },
    saveDraft() {
      if(this.isSending) return
      this.email.status = 'draft'
      emailService.save(this.email)
      this.$router.push({query: {}})
    },
    closeCompose() {
      this.$emit('close')
    },
  },
  components: {
    emailService,
  },
}