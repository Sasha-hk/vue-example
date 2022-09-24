<template>
  <div class="note-item">
    <div class="overflow-content">
      <h3>{{ note.title }}</h3>

      <p>{{ note.body }}</p>
    </div>

    <v-button
      @click="$emit('deleteNote', note)"
    >delete</v-button>
  </div>
</template>

<script>
  export default {
    props: {
      note: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style>
.note-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px 12px 14px;
  border: 2px solid var(--base-color);
  border-radius: 4px;
}

.note-item:not(:last-child) {
  margin-bottom: 15px;
}

.overflow-content {
  margin-right: 10px;
  overflow: hidden;
}

.overflow-content h3 {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
