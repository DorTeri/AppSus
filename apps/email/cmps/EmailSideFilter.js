export default {
  template: `
        <section class="email-side-filter">
            <div @click="filter('inbox')">1</div>
            <div @click="filter('sent')">2</div>
            <div @click="filter('trash')">3</div>
            <div @click="filter('draft')">4</div>
            </section>
            `,
  data() {
    return {
      filterBy: {
        status: 'sent',
        txt: '', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        isStared: true, // (optional property, if missing: show all)
        lables: ['important', 'romantic'], // has any of the labels
      },
    }
  },
  methods: {
    filter() {
      this.$emit('filter', this.filterBy.status)
      console.log('Clicked')
    },
  },
}
