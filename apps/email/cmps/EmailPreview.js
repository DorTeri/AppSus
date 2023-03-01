import { svgService } from '../../../services/svg.service.js'

export default {
  name: 'emailPreview',
  props: ['email'],
  template: `
        <div class="email-preview" :class="{read: email.isRead}">
        <section class="preview-svgs-user">
        <div @click="filter('unChecked')" className="unChecked" 
                v-html="getSvg('unChecked')"></div>
                
        <div @click="filter('star')" className="star" 
        v-html="getSvg('star')"></div>

    <div @click="filter('labelImportant')" className="labelImportant" 
            v-html="getSvg('labelImportant')"></div>
            <p>{{ email.from}}</p>
</section>
            <p>{{ email.subject}}</p>
            <p>{{ email.sentAt}}</p>
     </div>
    `,
  methods: {
    getSvg(iconName) {
      return svgService.getMailSvg(iconName)
    },
  },
  computed: {},
}
