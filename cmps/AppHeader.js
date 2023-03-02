import SearchFilter from "./SearchFilter.js"
export default {
	template: `
        <header class="app-header">
            <h1 class="logo"><span>A</span><span>p</span><span>p</span><span>S</span><span>u</span><span>s</span></h1>
            <SearchFilter />
            <nav>
                <RouterLink to="/">Home</RouterLink> | 
                <RouterLink to="/about">About</RouterLink> |
                <RouterLink to="/keep">Notes</RouterLink> |
                <RouterLink to="/mail">Email</RouterLink>
            </nav>
        </header>
    `,

    components: {
        SearchFilter,
    }
}
