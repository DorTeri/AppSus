export default {
    name: 'emailPreview',
    props: ['email'],
    template: `
    <div class="email-preview">
            <h2>{{ email.id }}</h2>
            <p>{{ email.subject}}</p>
            <p>{{ email.body}}</p>
            <p>Sent At: {{ email.sentAt}}</p>
            <p>From: {{ email.from}}</p>
     </div>
    `,

computed: {
}
}