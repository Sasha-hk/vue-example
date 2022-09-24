<template>
  <notes-vue />
</template>

<script>
  import NotesVue from '@/components/note/Notes.vue';

  export default {
    components: {
      NotesVue,
    },
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;

  /* vars */
  --base-color: green;
}

h1 {
  font-size: 35px;
  font-weight: 700;
}
h2 {
  font-size: 26px;
  font-weight: 500;
}
h3 {
  font-size: 24px;
  font-weight: 500;
}

p {
  font-size: 16px;
}

small {
  font-size: 14px;
}
</style>
