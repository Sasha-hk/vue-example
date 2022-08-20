<template>
  <div class="post">
    <div>
      <strong>Title: </strong> {{ post.title }} <br>
      <strong>Body: </strong> {{ post.body }}
    </div>

    <div class="post-buttons">
      <my-button-vue
        @click="$emit('delete', post)"
      >delete</my-button-vue>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true,
    },
  }
}
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid green;
}
.post:not(:last-child) {
  margin-bottom: 10px;
}
</style>
