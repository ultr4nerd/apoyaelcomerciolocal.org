<template>
  <div class="error">
    <div class="content has-text-centered">
      <img width="300px" src="~/static/404.png" alt="Error 404" />
      <h1 class="title">
        Página no encontrada
      </h1>
      <h3 class="subtitle">
        Lo sentimos, la página que buscas no se encuentra disponible :(
      </h3>
      <nuxt-link to="/">
        Volver a página de inicio
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
}
</script>
