import { createApp } from 'vue';
import App from './App.vue';

// For standalone development
if (import.meta.env.DEV) {
  const devContainer = document.querySelector('#app');
  if (devContainer) {
    createApp(App).mount(devContainer);
  }
}

export default App;