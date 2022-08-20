<template>
  <input
    :value="modelValue"
    @input="updateModelValue"
    type="text"
  >
</template>

<script>
export default {
  name: 'my-input-vue',
  props: {
    modelValue: {
      type: [String, Number],
      require: true,
    },
  },
  methods: {
    updateModelValue(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid green;
  padding: 10px;
}
</style>
