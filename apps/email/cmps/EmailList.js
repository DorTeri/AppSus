import EmailPreview from './EmailPreview.js'
import { svgService } from '../../../services/svg.service.js'

export default {
  props: ['emails'],
  template: `
        <section class="email-list">
            <div class="empty-div"></div>
                <div v-for="email in emails" :key="email.id" 
                 @click.native="$router.push('/mail/' + email.id)"
                class="email-preview" :email="email">
                <EmailPreview :email="email"/>
                <div @click="remove(email.id)" class="remove-btn"
            v-html="getSvg('trash')"></div>
        </div>
        <br>
        </section>
    `,
  methods: {
    remove(emailId) {
      this.$emit('remove', emailId)
    },
    getSvg(iconName) {
        return svgService.getMailSvg(iconName)
      },
  },
  components: {
    EmailPreview,
  },
}
