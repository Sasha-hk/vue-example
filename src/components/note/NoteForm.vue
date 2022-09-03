<template>
  <v-section>

    <form
      class="note-form"
      @submit.prevent
    >
      <h2 style="margin-bottom: 10px">Create note</h2>

      <v-input
        v-model="note.title"
        placeholder="title"
        required="true"
      />

      <v-input
        v-model="note.body"
        placeholder="body"
        required="true"
      />

      <v-button
        type="submit"
        @click="createNote"
      >create</v-button>
    </form>
  </v-section>
</template>

<script>
export default {
  data() {
    return {
      note: {
        title: '',
        body: '',
      },
    }
  },
  methods: {
    createNote(e) {
      if (this.note.title && this.note.body) {
        this.$emit('createNote', {
          id: Date.now(),
          title: this.note.title,
          body: this.note.body,
        });

        this.note.title = '';
        this.note.body = '';

        e.preventDefault();
      }
    },
  }
}
</script>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.note-form > input {
  margin-bottom: 10px;
}
</style>
