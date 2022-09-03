<template>
  <v-section class="notes-list">
    <div class="heading">
      <h2>Notes</h2>

      <span>number of notes: {{ notes.length }}</span>
    </div>

    <div
      v-if="notes.length !== 0"
    >
      <note-item-vue
        class="note-item"
        v-for="note in notes"
        :note="note"
        :id="note.id"
        @deleteNote="$emit('deleteNote', $event)"
      />

    </div>
    <p
      class="no-notes"
      v-else
    >
      notes not exists
    </p>
  </v-section>
</template>

<script>
  import NoteItemVue from './NoteItem.vue';

  export default {
    components: {
      NoteItemVue,
    },
    props: {
      notes: {
        type: Array,
        required: true,
      }
    },
  }
</script>

<style scoped>
.notes-list {
  padding-top: 20px;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.no-notes {
  color: rgba(0, 0, 0, 0.3);
}

</style>
