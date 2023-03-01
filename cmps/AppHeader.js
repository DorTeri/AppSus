import SearchFilter from "./SearchFilter.js"
export default {
	template: `
        <header class="app-header">
            <h1>AppSus</h1>
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
