import { svgService } from '../../../services/svg.service.js'


export default {
    template: `
        <form class="compose-new">
            <div class="New-msg">New Message</div>
            <input class="compose-input" placeholder="Recipients" type="text" />
            <input class="compose-input" placeholder="Subject" type="text" />
            <hr>
            <input class="compose-input body" type="text" />
            <section class="send-trash-btns"><button>Send</button></section>
            </form>
            `,
    data() {
        return {
        
        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getMailSvg(iconName)
          },
    }
}