import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000, // 20s
    specPattern: './src/**/*.cy-e2e.{ts,tsx}',
  },
});
