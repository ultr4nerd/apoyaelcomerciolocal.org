<template>
  <section class="section">
    <div class="container">
      <business-list :businesses="businesses" :title="title" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, route, error }) {
    try {
      const { list } = await $content('categories').fetch()
      const { name, description, seoImage } = list.filter(
        (category) => category.url === route.params.category
      )[0]

      const businesses = await $content('businesses', route.params.category)
        .sortBy('updatedAt', 'desc')
        .fetch()
      return {
        title: name,
        description,
        seoImage,
        businesses,
      }
    } catch {
      error({ statusCode: 404, message: 'No pudimos encontrar la categoría' })
    }
  },
  head() {
    return {
      title: this.title + ' | Apoya el Comercio Local',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.seoImage,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: this.seoImage,
        },
      ],
    }
  },
}
</script>
