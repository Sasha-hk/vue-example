<template>
  <button
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button-vue',
}
</script>

<style>
.btn {
  padding: 5px;
  background: none;
  border: 1px solid green;
  border-radius: 4px;
  color: green;
}
</style>
