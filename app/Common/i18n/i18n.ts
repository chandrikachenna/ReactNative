import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './translations/en.json';
import hi from './translations/hi.json';
import te from './translations/te.json';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  te,
  hi, 
};

export default I18n;
