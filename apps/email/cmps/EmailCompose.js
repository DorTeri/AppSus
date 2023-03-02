import { svgService } from '../../../services/svg.service.js'
import { emailService } from '../services/email.service.js'


export default {
    template: `
        <form @submit.prevent="composeEmail(email.id)" class="compose-new">
            <div class="New-msg">New Message</div>
            <input class="compose-input" v-model="email.to" placeholder="Recipients" type="text" />
            <input class="compose-input" v-model="email.subject" placeholder="Subject" type="text" />
            <hr>
            <input class="compose-input body"  v-model="email.body" type="text" />
            <section class="send-trash-btns"><button @click="hideCompose">Send</button></section>
            </form>
            `,
    data() {
        return {
            email: emailService.getEmptyEmail()
        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getMailSvg(iconName)
          },
          composeEmail(emailId) {
              emailService.save(this.email)
              this.$emit('saveEmail',emailId)
              console.log('Email Composed')
          },
        //   hideCompose() {
        //     this.form.hidden
        //   }
        },
    components: {
        emailService,
      },
}