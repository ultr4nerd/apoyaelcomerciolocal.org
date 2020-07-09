<template>
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <div class="columns">
          <article class="column is-6">
            <featured />
          </article>
          <div class="column"></div>
          <article class="column is-5">
            <categories />
          </article>
        </div>
      </div>
      <div class="container businessses">
        <businessses />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.businessses {
  margin-top: 40px;
}
</style>
