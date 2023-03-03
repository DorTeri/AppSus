import EmailPreview from './EmailPreview.js'
import { svgService } from '../../../services/svg.service.js'

// @click="remove(email.id)"

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <div class="empty-div"></div>
                <div v-for="email in emails" :key="email.id" 
                 @click.native="showDetails(email.id)"
                class="email-preview" :email="email">
                <EmailPreview :email="email"/>
                <div @click.stop=" moveToTrash(email.id)" class="remove-btn"
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
        showDetails(mailId) {
            this.$emit('toDetails', { mailId: mailId })
        },
        moveToTrash(emailId) {
           const email = this.emails.find(email => email.id === emailId)
            if (email.status === 'trash') this.remove(emailId)
            else email.status = 'trash'
        }
    },
    components: {
        EmailPreview,
    },
}