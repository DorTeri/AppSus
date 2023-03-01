export default {
    template: `
        <section class="search-filter">
            <input
            @click="changePath"
                placeholder="🔍 Search mail"
                type="text" />
            </section>
            `,
            methods: {
                changePath() {
                    this.$router.push('search')
                }
            }
}