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
  padding: 20px;
}
</style>
