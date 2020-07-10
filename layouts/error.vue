<template>
  <div class="error">
    <div class="content has-text-centered">
      <img src="~assets/404.png" alt="Error Image" />
      <div v-if="error.statusCode === 404" class="error-message">
        <h1 class="title has-text-primary">
          Lo sentimos...
        </h1>
        <p class="subtitle is-6">
          {{ errorMessage }}
        </p>
      </div>
      <div v-else class="error-message">
        <h1 class="title has-text-primary">
          Ha ocurrido un error
        </h1>
        <h3 class="subtitle is-6">
          Estamos trabajando para solucionarlo
        </h3>
      </div>
      <b-button type="is-primary" tag="nuxt-link" to="/">
        Volver al inicio
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessage() {
      if (
        ['This page could not be found', 'Not Found'].includes(
          this.error.message
        )
      ) {
        return 'No pudimos encontrar lo que necesitabas'
      } else {
        return this.error.message
      }
    },
  },
}
</script>

<style scoped>
img {
  width: 100px;
}

.error-message {
  margin: 20px 0 30px;
}

.error {
  padding-top: 20vh;
  min-height: 70vh;
}
</style>
