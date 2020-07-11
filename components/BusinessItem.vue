<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-128x128">
        <img :src="business.image" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ business.title }}</strong>
          <br />
          {{ business.description }}
        </p>
      </div>
      <nav class="level is-mobile">
        <b-button
          tag="nuxt-link"
          :to="`/comercios/${business.slug}`"
          type="is-primary"
          size="is-small"
          >Ver más</b-button
        >
      </nav>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    business: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
article {
  align-items: center;
}
</style>
