<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-square">
        <slot />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
