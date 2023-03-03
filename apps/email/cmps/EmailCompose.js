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
            <section class="send-trash-btns"><button @click="closeCompose" >Send</button></section>
            </form>
</section>
            `,
  data() {
    return {
      email: emailService.getEmptyEmail(),
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
      emailService.save(this.email)
      //   this.$emit('saveEmail',emailId)
    },
    saveDraft() {
      emailService.save(this.email)
      this.email.status = 'draft'
    },
    closeCompose() {
      this.$emit('close')
    },
    getParams() {
      const subject = this.$route.query.subject
      const body = this.$route.query.body
      console.log('subject', subject)
      console.log('body', body)
    }
  },
  components: {
    emailService,
  },
}