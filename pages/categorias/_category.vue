<template>
  <section class="section">
    <div class="container">
      <business-list :businesses="businesses" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, route, error }) {
    // eslint-disable-next-line no-console
    console.log('route.params.category', route.params.category)
    try {
      const businesses = await $content('businesses', route.params.category)
        .sortBy('updatedAt')
        .fetch()
      return { businesses }
    } catch {
      error({ statusCode: 404, message: 'No pudimos encontrar la categoría' })
    }
  },
}
</script>
