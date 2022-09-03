<template>
  <button class="v-button"><slot></slot></button>
</template>

<script>
export default {
  name: 'v-button'
}
</script>

<style scoped>
.v-button {
  padding: 4px;
  border: 2px solid var(--base-color);
  border-radius: 4px;
  background: none;
  color: var(--base-color);
}
</style>
