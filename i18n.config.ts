export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'tw',
    messages: {
      en: {
        welcome: 'Welcome'
      },
      tw: {
        welcome: '歡迎光臨'
      }
    }
  };
});
