import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vitest/config" />
export default defineConfig({
  server: {
    proxy: {
      "/api":  "http://localhost:8000",
    },
  },
  plugins: [react()],
   test: {                                                                                                                                                                                                           
      globals: true,                                                                                                                                                                                                  
      environment: "happy-dom",                                                                                                                                                                                           
      setupFiles: "./src/test/setup.ts",                                                                                                                                                                              
    },    
})
