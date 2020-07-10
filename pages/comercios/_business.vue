<template>
  <section class="section">
    {{ business }}
  </section>
</template>

<script>
export default {
  async asyncData({ $content, route, error }) {
    const business = await $content('businesses', { deep: true })
      .where({ slug: route.params.business })
      .sortBy('updatedAt')
      .fetch()

    if (business.length > 0) {
      return { business }
    } else {
      error({ statusCode: 404, message: 'No pudimos encontrar el comercio' })
    }
  },
}
</script>
