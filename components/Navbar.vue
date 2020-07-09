<template>
  <div>
    <b-navbar type="is-primary">
      <template #brand>
        <b-navbar-item tag="nuxt-link" to="/">
          <img src="~/assets/logo.png" alt="Logo" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="nuxt-link" to="/">
          Inicio
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/comercios">
          Comercios
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/categorias">
          Categorías
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item href="#">
          ¡Quiero estar dentro!
        </b-navbar-item>
        <b-navbar-item href="#">
          Otros Servicios
        </b-navbar-item>
        <b-navbar-item @click="isModalActive = true">
          Apoya el proyecto
        </b-navbar-item>
      </template>
    </b-navbar>
    <b-modal
      :active.sync="isModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <donations-modal />
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isModalActive: false,
    }
  },
}
</script>
