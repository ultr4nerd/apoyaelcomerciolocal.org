<template>
  <div>
    <navbar />
    <nuxt />
    <footer-section />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}

.page-enter,
.page-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
