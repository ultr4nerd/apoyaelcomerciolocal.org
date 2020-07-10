<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
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
        <b-button type="is-primary" size="is-small">Ver más</b-button>
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
