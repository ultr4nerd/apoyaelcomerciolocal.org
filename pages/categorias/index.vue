<template>
  <section class="section">
    <div class="container">
      <categories-list :categories="categories" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Categorias',
  async asyncData({ $content }) {
    const { list } = await $content('categories').fetch()
    return { categories: list }
  },
  head() {
    return {
      title: 'Categorías | Apoya el Comercio Local',
    }
  },
}
</script>
