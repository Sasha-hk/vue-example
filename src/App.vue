<template>
  <div class="wrapper">
    <post-form-vue
      @create="createPost"
    ></post-form-vue>
    <post-list-vue
      :posts="posts"
    ></post-list-vue>
  </div>
</template>

<script>
import PostListVue from '@/components/PostList.vue';
import PostFormVue from '@/components/PostForm.vue';

export default {
  components: {
    PostListVue,
    PostFormVue,
  },
  data() {
    return {
      posts: [
        {
          id: 0,
          title: 'Title',
          body: 'Body',
        },
        {
          id: 1,
          title: 'Title 1',
          body: 'Body 1',
        },
        {
          id: 2,
          title: 'Title 2',
          body: 'Body 2',
        }
      ],
    }
  },
  methods: {
    createPost(newPost) {
      this.posts.push(newPost);
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  padding: 10px;
}
</style>
