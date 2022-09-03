<template>
  <v-container>
    <notes-vue />
  </v-container>
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

  /* vars */
  --base-color: green;
}

p,
button,
input,
div {
  font-size: 16px;
}
</style>
