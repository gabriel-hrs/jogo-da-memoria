import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/jogo-da-memoria/',
  plugins: [vue()],
});
