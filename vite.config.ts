import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import unpluginAutoImport from 'unplugin-auto-import/vite';
import { VueUseComponentsResolver, VueUseDirectiveResolver } from 'unplugin-vue-components/resolvers';
import unpluginVueComponents from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig(({ mode }) => ({
  plugins: [
    vue({
      features: {
        optionsAPI: false,
        prodDevtools: process.env.CI !== 'true',
        prodHydrationMismatchDetails: false,
      },
    }),
    vueDevTools(),
    unpluginAutoImport({
      dts: true,
      dtsMode: 'overwrite',
      imports: ['vue', 'pinia', '@vueuse/core', { from: 'zod', imports: ['z'] }],
      dirs: [{ glob: './src/composables/*.ts', types: true }],
    }),
    unpluginVueComponents({
      dts: true,
      syncMode: 'overwrite',
      resolvers: [VueUseComponentsResolver(), VueUseDirectiveResolver()],
      globs: ['src/components/*.vue'],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },

  build: {
    sourcemap: mode === 'production' ? true : 'inline',
    minify: mode === 'production' ? 'terser' : false,
    target: 'esnext',
  },
}));
