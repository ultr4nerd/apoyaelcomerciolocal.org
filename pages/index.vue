<template>
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <div class="columns">
          <article class="column is-6">
            <business-list title="Destacados" :businesses="featured" />
          </article>
          <div class="column"></div>
          <article class="column is-5">
            <categories-list :categories="categories" />
          </article>
        </div>
      </div>
      <div class="container businessses">
        <business-list :businesses="businesses" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData({ $content }) {
    const { list } = await $content('categories').fetch()
    const businesses = await $content('businesses', { deep: true }).fetch()
    const featured = await $content('businesses', { deep: true })
      .where({ featured: true })
      .sortBy('updatedAt')
      .fetch()
    return { businesses, featured, categories: list }
  },
}
</script>

<style scoped>
.businessses {
  margin-top: 40px;
}
</style>
