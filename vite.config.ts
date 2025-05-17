import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@icons', replacement: path.resolve(__dirname, 'src/components/icons') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@theme', replacement: path.resolve(__dirname, 'src/theme') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') }
    ]
  }
});