<template>
  <div>
    <form class="new-post" @submit.prevent>
      <h4>Create new post</h4>

      <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="title"
      >
      <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="body"
      >

      <my-button-vue
        @click="createPost"
        style="align-self: flex-end"
      >submit</my-button-vue>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();

      this.$emit('create', this.post)

      this.post = {
        title: '',
        body: '',
      }
    },
  }
}
</script>

<style scoped>
form.new-post {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.input {
  width: 100%;
  border: 1px solid green;
  padding: 10px;
}
.input:not(:last-child) {
  margin-bottom: 5px;
}
</style>
