import SearchFilter from "./SearchFilter.js"
import { svgService } from "../services/svg.service.js"

export default {
    template: `
        <header class="app-header">
            <h1 class="logo"><span>A</span><span>p</span><span>p</span><span>S</span><span>u</span><span>s</span></h1>
            <SearchFilter />
            <div class="profile-section">
            <div className="icon-apps" @click="navOpen = !navOpen" v-html="getSvg('apps')"></div>
            <div class="profile-wrapper"><img class="app-profile" src="../assets/img/app-profile.png"></div>
            </div>
            <nav v-show="navOpen">
                <RouterLink to="/"><div className="icon" v-html="getSvg('home')"></div></RouterLink>
                <RouterLink to="/about"><div className="icon" v-html="getSvg('about')"></div></RouterLink>
                <RouterLink to="/keep"><div className="icon" v-html="getSvg('keep')"></div></RouterLink>
                <RouterLink to="/mail"><div className="icon" v-html="getSvg('gmail')"></div></RouterLink>
                <RouterLink to="/"><div className="icon" v-html="getSvg('books')"></div></RouterLink>
            </nav>
        </header>
    `,
    data() {
        return {
            navOpen: false,
        }
    },
    methods: {
        getSvg(iconName) {
            return svgService.getLogoSvg(iconName)
        }
    },
    components: {
        SearchFilter,
    }
}
