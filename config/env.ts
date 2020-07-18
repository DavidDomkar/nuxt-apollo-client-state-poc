type Environment = {
  host?: string;
  port?: string | number;
  firebase: {
    config: Object;
    serviceAccount: {
      projectId?: string;
      clientEmail?: string;
      privateKey?: string;
    };
  };
};

if (!process.client) {
  require('dotenv').config({ path: '../.env' });
}

const parseFirebaseConfig = (): Object => {
  if (process.env.FIREBASE_CONFIG) return JSON.parse(process.env.FIREBASE_CONFIG as string);

  console.error('FIREBASE_CONFIG environment variable is required!');

  return {};
};

const parseFirebaseServiceAccount = (): {
  projectId?: string;
  clientEmail?: string;
  privateKey?: string;
} => {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string);

  if (!process.client) console.error('FIREBASE_SERVICE_ACCOUNT environment variable is required!');

  return {};
};

export const env: Environment = {
  host: process.env.LOCAL_HOST || process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
  firebase: {
    config: parseFirebaseConfig(),
    serviceAccount: parseFirebaseServiceAccount(),
  },
};
