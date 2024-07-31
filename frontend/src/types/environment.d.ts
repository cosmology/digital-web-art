declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      HOST: string;
      PORT: string;
      MAPBOX_API?: string;
      REACT_APP_HOST?: string;
      REACT_APP_PORT?: string;
      REACT_APP_GREETING?: string;
      REACT_APP_GREETING_TEST?: string;
      REACT_APP_MAPBOX_API?: string;
      REACT_APP_OKTA_DEV_URL?: string;
      REACT_APP_OKTA_CLIENT_ID?: string;
      REACT_APP_OKTA_REDIRECT_URL?: string;
    }
  }
}

export {};
