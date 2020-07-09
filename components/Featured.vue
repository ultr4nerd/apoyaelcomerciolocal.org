<template>
  <div>
    <h2 class="title has-text-primary">Destacados</h2>
    <business v-for="i in 3" :key="i" />
  </div>
</template>
