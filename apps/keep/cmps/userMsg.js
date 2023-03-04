import { eventBus } from "../../../services/event-bus.service.js"

export default {
    template: `
    <div class="user-msg" :class="msg.type" v-if="msg">
            <button @click="msg=null">x</button>
            <p>
                {{msg.txt}}
            </p>
        </div>
    `,
    data() {
        return {
            msg: null,
        }
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', msg => {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 1500)
        })
    },
    unmounted() {
        this.unsubscribe()
    },
}