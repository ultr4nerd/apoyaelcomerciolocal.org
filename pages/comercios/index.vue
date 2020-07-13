<template>
  <section class="section">
    <div class="container">
      <business-list :businesses="businesses" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Comercios',
  async asyncData({ $content }) {
    const businesses = await $content('businesses', { deep: true })
      .sortBy('updatedAt', 'desc')
      .fetch()
    return { businesses }
  },
  head() {
    return {
      title: 'Comercios | Apoya el Comercio Local',
    }
  },
}
</script>
