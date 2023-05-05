// uno.config.ts
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import icons from './icons'
export default defineConfig({
  presets: [
    presetIcons({
      /* options */
    }),
    // ...other presets
  ],
  safelist: [...icons],
})
