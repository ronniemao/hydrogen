import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultLanguageCode: 'en',
    defaultCountryCode: 'us',
    storeDomain: 'hydrogen-preview.myshopify.com',
    storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    expires: new Date(1749343178614),
  }),
  logger: {
    trace() {},
    debug() {},
  },
});
