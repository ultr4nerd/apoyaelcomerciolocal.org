<template>
  <div class="layout">
    <navbar />
    <div class="layout-content">
      <nuxt />
    </div>
    <footer-section />
  </div>
</template>

<style scoped>
div.layout-content {
  min-height: 70vh;
}

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
