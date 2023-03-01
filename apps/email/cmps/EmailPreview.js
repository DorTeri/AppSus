export default {
    name: 'emailPreview',
    props: ['email'],
    template: `
    <div class="email-preview" :class="{read: email.isRead}">
        <p>{{ email.from}}</p>
            <p>{{ email.subject}}</p>
            <p>{{ email.sentAt}}</p>
     </div>
    `,

computed: {
}
}