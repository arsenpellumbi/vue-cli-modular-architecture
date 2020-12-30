/* eslint-disable @typescript-eslint/prefer-regexp-exec */
import { PluginParams } from '@/core/types';
import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';
import Configurations from '@/core/configs';

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export const i18n = new VueI18n({
  locale: Configurations.i18n.locale || 'en',
  fallbackLocale: Configurations.i18n.fallbackLocale || 'en',
  messages: loadLocaleMessages()
});

export default function<TStore>({ app }: PluginParams<TStore>) {
  // Set i18n instance on app
  app.i18n = i18n;
}
