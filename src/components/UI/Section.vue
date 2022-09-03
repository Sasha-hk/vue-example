<template>
  <section class="v-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'v-section',
}
</script>

<style scoped>
.v-section {
  max-width: 800px;
  margin: 0 auto;
}
</style>
