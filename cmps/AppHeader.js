import SearchFilter from "./SearchFilter.js"
import { svgService } from "../services/svg.service.js"

export default {
    template: `
        <header class="app-header">
            <h1 class="logo"><span>A</span><span>p</span><span>p</span><span>S</span><span>u</span><span>s</span></h1>
            <SearchFilter />
            <div class="profile-section">
            <div className="icon-apps" @click="navOpen = !navOpen" v-html="getSvg('apps')"></div>
            <div class="profile-wrapper"><img class="app-profile" src="assets/img/app-profile.png"></div>
            </div>
        </header>
        <nav v-show="navOpen" class="header-nav">
            <RouterLink to="/"><div className="icon" v-html="getSvg('home')"></div>Home</RouterLink>
            <RouterLink to="/keep"><div className="icon" v-html="getSvg('keep')"></div>Keep</RouterLink>
            <RouterLink to="/"><div className="icon" v-html="getSvg('books')"></div>Books</RouterLink>
            <RouterLink to="/mail"><div className="icon" v-html="getSvg('gmail')"></div>Gmail</RouterLink>
            <RouterLink to="/about"><div className="icon" v-html="getSvg('about')"></div>About</RouterLink>
            <RouterLink to="/about"><div className="icon" v-html="getSvg('youtube')"></div>YouTube</RouterLink>
        </nav>
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
