<template>
  <div>
    <h2 class="title has-text-primary">Categorías</h2>
    <div class="columns is-mobile is-multiline">
      <div
        v-for="category in categories"
        :key="category.name"
        class="column is-half-mobile is-one-third-tablet"
      >
        <category-card :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>
