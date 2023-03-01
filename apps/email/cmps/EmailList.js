import EmailPreview from './EmailPreview.js'

export default {
  props: ['emails'],
  template: `
        <section class="email-list">
                <div v-for="email in emails" :key="email.id" class="email-preview">
                    <EmailPreview :email="email"/>
                </div>  
        </section>
    `,
  methods: {
  
  },
  components: {
    EmailPreview,
  },
}
