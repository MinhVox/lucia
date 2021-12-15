//i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vnMessage from './vn.json'
import enMessage from './en.json'

Vue.use(VueI18n)

const messages = {
    vn: vnMessage,
    en: enMessage,
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages,
    fallbackLocale: 'vn',
})

export default i18n