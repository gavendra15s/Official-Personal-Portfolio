import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resources: resolve(__dirname, 'student-resources.html'),
        terms: resolve(__dirname, 'terms-and-conditions.html'),
        privacy: resolve(__dirname, 'privacy-policy.html'),
        refund: resolve(__dirname, 'refund-and-cancellation-policy.html'),
        success: resolve(__dirname, 'payment-success.html'),
        failure: resolve(__dirname, 'payment-failure.html'),
        thankyou: resolve(__dirname, 'thank-you.html')
      }
    }
  }
});
