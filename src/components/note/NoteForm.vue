<template>
  <v-section>

    <form
      class="note-form"
      @submit.prevent
    >
      <h1 style="margin-bottom: 10px">Create note</h1>

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
  margin: 0 auto;
}

.note-form > input {
  margin-bottom: 10px;
}

@media only screen and (min-width: 461px) {
  .note-form {
    max-width: 300px;
  }
}

@media only screen and (max-width: 460px) {
  .note-form {
    width: 100%;
  }
}
</style>
