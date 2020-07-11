<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container has-text-centered info-header">
          <figure class="image is-128x128">
            <img :src="business.image" :alt="business.title" />
          </figure>
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
  layout: 'noFooter',
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

<style scoped>
figure {
  margin-bottom: 20px;
}

.info-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
