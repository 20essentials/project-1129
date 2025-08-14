import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  //Localhost
  // base: './',

  //Deploy only with Github Pages, with Vercel is not neccesary 
  // base: '/project-1026/',

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
