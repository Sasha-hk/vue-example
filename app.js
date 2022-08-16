const appConfig = {
  data() {
    return {
      title: "Notes list",
      inputPlaceholder: "Note",
      inputValue: "",
      notes: ['buy milk'],
    }
  },
  methods: {
    inputHandler(e) {
      this.inputValue = e.target.value;
    },
    addHandler() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    deleteNote(i) {
      this.notes.splice(i, 1);
    },
    upperCase(item) {
      return item.toUpperCase();
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
};

const App = Vue.createApp(appConfig);

App.mount('#app');
