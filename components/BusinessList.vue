<template>
  <div>
    <h2 class="title has-text-primary">{{ title }}</h2>
    <business-item
      v-for="(business, index) in businesses"
      :key="index"
      :business="business"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Comercios',
    },
    businesses: {
      type: Array,
      required: true,
    },
  },
}
</script>
