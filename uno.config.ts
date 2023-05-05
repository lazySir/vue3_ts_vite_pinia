// uno.config.ts
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetIcons({ /* options */ }),
    // ...other presets
  ],
  safelist:[
    'i-material-symbols:lock',
    'i-fluent:data-histogram-24-filled',
    'i-material-symbols:home',
    'i-ep:message-box',
    'i-basil:other-1-outline',
    'i-material-symbols:person',
    'i-carbon:user-avatar-filled',
    'i-material-symbols:grid-view',
  ]
})