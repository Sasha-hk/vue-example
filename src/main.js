import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

import UiComponents from './components/'

const store = createStore({
  state() {
    return {
      notes: [],
    }
  },
  mutations: {
    addNote(state, note) {
      state.notes.unshift(note);
    },
    deleteNote(state, note) {
      state.notes = state.notes.filter((noteItem) => noteItem.id !== note.id);
    },
    setNotes(state, notes) {
      state.notes = notes;
    }
  }
})

const app = createApp(App);

app.use(store);

UiComponents.forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app');
