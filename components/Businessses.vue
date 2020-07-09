<template>
  <div>
    <h2 class="title has-text-primary">Comercios</h2>
    <business v-for="i in 10" :key="i" />
  </div>
</template>
