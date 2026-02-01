<template>
  <div id="app">
    <h1>Vue Microfrontend</h1>
    <p>This is a Vue 3 microfrontend loaded via Module Federation.</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  methods: {
    handleClick() {
      alert('Button clicked from Vue MFE!');
    },
  },
});
</script>

<style scoped>
#app {
  padding: 20px;
  border: 2px solid #42b883;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  color: #42b883;
}

button {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #35a372;
}
</style>