<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-container',
}
</script>

<style scoped>
.container {
  width: 100%;
  min-width: 260px;
  padding: 20px;
}
</style>
