/**
 * Import Dependency
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

/**
 * Import Language
 */
import en from './i18n/en_US'
import de from './i18n/de_DE'

/**
 * Config
 */
Vue.use(VueI18n)

/**
 * Export
 */
export default new VueI18n({
	locale: 'en',
	messages: {
		en: {
			lang: en
		},
		de: {
			lang: de
		}
	}
})
