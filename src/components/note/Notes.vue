<template>
  <v-container>
    <note-form-vue
      @createNote="createNote"
    />

    <notes-list-vue
      :notes="$store.state.notes"
      @deleteNote="deleteNote"
    />
  </v-container>
</template>

<script>
  import NoteFormVue from './NoteForm.vue';
  import NotesListVue from './NotesList.vue';

  export default {
    components: {
      NoteFormVue,
      NotesListVue,
    },
    methods: {
      createNote(note) {
        this.$store.commit('addNote', note);

        window.localStorage.setItem('notes', JSON.stringify(this.$store.state.notes));
      },
      deleteNote(note) {
        this.$store.commit('deleteNote', note);

        window.localStorage.setItem('notes', JSON.stringify(this.$store.state.notes));
      },
    },
    mounted() {
      const notes = JSON.parse(window.localStorage.getItem('notes'))

      if (Array.isArray(notes) && notes.length !== 0) {
        return this.$store.commit('setNotes', notes);
      }
    },
  }
</script>

<style scoped>

</style>
