<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<style scoped>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s ease-in-out;
}

.layout-enter,
.layout-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
