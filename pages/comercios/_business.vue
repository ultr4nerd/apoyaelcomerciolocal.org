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
  head() {
    return {
      title: this.business.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.business.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.business.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.business.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.business.seoImage,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://apoyaelcomerciolocal.org${this.$route.fullPath}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.business.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.business.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.business.seoImage,
        },
      ],
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
