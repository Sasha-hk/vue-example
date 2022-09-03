<template>
  <v-section>
    <note-form-vue
      @createNote="createNote"
    />

    <notes-list-vue
      :notes="notes"
      @deleteNote="deleteNote"
    />
  </v-section>
</template>

<script>
  import NoteFormVue from './NoteForm.vue';
  import NotesListVue from './NotesList.vue';

  export default {
    components: {
      NoteFormVue,
      NotesListVue,
    },
    data() {
      return {
        notes: [],
      }
    },
    methods: {
      deleteNote(note) {
        this.notes = this.notes.filter((noteItem) => noteItem.id !== note.id);

        window.localStorage.setItem('notes', JSON.stringify(this.notes));
      },
      createNote(note) {
        this.notes.unshift(note);

        window.localStorage.setItem('notes', JSON.stringify(this.notes));
      },
    },
    mounted() {
      const notes = JSON.parse(window.localStorage.getItem('notes'))

      if (notes) {
        this.notes = notes;
      }
    },
  }
</script>

<style scoped>

</style>
