/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@kiwiD': path.resolve(__dirname, './src/kiwiD'),
      '@services': path.resolve(__dirname, './src/state-setup/services'),
      '@hooks': path.resolve(__dirname, './src/state-setup/hooks'),
      '@redux': path.resolve(__dirname, './src/state-setup/redux'),
    },
  },
});
