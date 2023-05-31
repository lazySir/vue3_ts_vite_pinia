import { createI18n } from 'vue-i18n'

import zh from './modules/zh'
import en from './modules/en'
import zh_tw from './modules/zh-tw'
import de from './modules/de'
import fr from './modules/fr'
import ja from './modules/ja'
import ko from './modules/ko'
import es from './modules/es'
const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: 'zh', //设置地区
  //组合语言包对象
  messages: {
    zh,
    en,
    zh_tw,
    de,
    fr,
    ja,
    ko,
    es,
  },
})

export default i18n
