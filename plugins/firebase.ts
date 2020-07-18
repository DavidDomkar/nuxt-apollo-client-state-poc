import { Plugin } from '@nuxt/types';
import firebase from 'firebase/app';
import { onGlobalSetup } from 'nuxt-composition-api';
import { env } from '@/config';

const core: Plugin = () => {
  onGlobalSetup(() => {
    if (!process.server && !firebase.apps.length) firebase.initializeApp(env.firebase.config);
  });
};
export default core;
