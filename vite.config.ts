import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnoCSS({
      presets: [presetUno({ preflight: false })],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
