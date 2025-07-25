import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for React + TypeScript project
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  }
});
