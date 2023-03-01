export default {
    name: 'emailPreview',
    props: ['email'],
    template: `
    <div class="email-preview">
        <p>{{ email.from}}</p>
            <p>{{ email.subject}}</p>
            <p>{{ email.sentAt}}</p>
     </div>
    `,

computed: {
}
}