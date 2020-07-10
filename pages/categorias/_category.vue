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
