import { defineConfig } from 'vitest/config';

export default defineConfig({
    "base": "./",
    test: {
        include: ['tests/**/*.test.js'],
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setup.js']
    }
     
});
