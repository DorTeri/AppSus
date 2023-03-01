export default {
    props: ['info'],
    template: `
    <h2>I'm text</h2>
    <p contenteditable="true">{{ info.txt }}</p>
    `,
    data() {
        return {
            
        }
    }
}