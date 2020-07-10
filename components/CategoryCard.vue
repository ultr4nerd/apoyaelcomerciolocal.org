<template>
  <nuxt-link :to="'categorias' + category.url">
    <div class="card">
      <div class="card-image">
        <figure class="image is-square">
          <img :src="category.image" :alt="category.name" />
        </figure>
      </div>
      <div class="card-content">
        <p class="subtitle is-6">{{ category.name }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
figure {
  object-fit: cover;
  overflow: hidden;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
