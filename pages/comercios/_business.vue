<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-primary">
            {{ business.title }}
          </h1>
          <h2 class="subtitle">
            {{ business.description }}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <nuxt-content :document="business" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, error }) {
    const business = await $content('businesses', { deep: true })
      .where({ slug: route.params.business })
      .fetch()

    if (business.length > 0) {
      return { business: business[0] }
    } else {
      error({ statusCode: 404, message: 'No pudimos encontrar el comercio' })
    }
  },
}
</script>
