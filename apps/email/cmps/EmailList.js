import EmailPreview from './EmailPreview.js'

export default {
  props: ['emails'],
  template: `
        <section class="email-list">
                <div v-for="email in emails" :key="email.id" 
                 @click.native="$router.push('/mail/' + email.id)"
                class="email-preview" :email="email">
                <EmailPreview :email="email"/>
                </div>  
        </section>
    `,
  methods: {
    // showDetails(emailId) {
    //     this.$emit('show-details', emailId)
    //   },
  },
  components: {
    EmailPreview,
  },
}



