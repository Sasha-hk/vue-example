<template>
  <div>
    <h3>Users list</h3>

    <post-item-vue
      v-for="post in posts"
      :post="post"
    />
  </div>
</template>

<script>
import PostItemVue from '@/components/PostItem.vue';

export default {
  components: {PostItemVue},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
</style>
