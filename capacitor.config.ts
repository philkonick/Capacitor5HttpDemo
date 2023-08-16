import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'httpDemo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
