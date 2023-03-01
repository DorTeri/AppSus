import EmailFilter from '../apps/email/cmps/EmailFilter.js'



export default {
	template: `
        <header class="app-header">
            <h1>AppSus</h1>
            <EmailFilter @filter="setFilterBy" />
            <nav>
                <RouterLink to="/">Home</RouterLink> | 
                <RouterLink to="/about">About</RouterLink> |
                <RouterLink to="/keep">Notes</RouterLink> |
                <RouterLink to="/mail">Email</RouterLink>
            </nav>
        </header>
    `,

    components: {
        EmailFilter,
    }
}
