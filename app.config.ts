import 'dotenv/config';

export default {
  expo: {
    name: 'MemoApp',
    slug: 'MemoApp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'jp.takemal.memoApp',
      buildNumber: '1.0.0',
    },
    android: {
      package: 'jp.takemal.memoApp',
      versionCode: 1,
      permissions: [],
      adaptiveIcon: {
        foregroundImage: './assets/adaptiveFrontIcon.png',
        backgroundImage: './assets/adaptiveBackIcon.png',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      firebase: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
      },
    },
  },
};
