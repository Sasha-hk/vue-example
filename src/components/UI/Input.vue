<template>
  <input
    class="v-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'v-input',
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
}
</script>

<style scoped>
.v-input {
  padding: 4px 8px;
  border: 2px solid var(--base-color);
  border-radius: 4px;
  background: none;
}

.v-input:focus {
  background: rgba(0, 150, 0, .1);
}
</style>
