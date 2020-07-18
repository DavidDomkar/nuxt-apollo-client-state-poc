import { NuxtConfig } from '@nuxt/types';
import { env } from './config';

const config: NuxtConfig = {
  mode: 'universal',

  server: {
    host: env.host,
    port: env.port,
  },

  target: 'server',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: ['@/plugins/firebase', '@/plugins/apollo'],

  components: [{ path: '@/components', prefix: 'ntt' }],

  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build', '@nuxtjs/stylelint-module', '@nuxtjs/tailwindcss', 'nuxt-composition-api', '@/modules/firebase'],

  modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv'],

  build: {},

  firebase: {
    config: env.firebase.config,
  },

  pwa: {
    workbox: {
      importScripts: ['/firebase.sw.js'],
      dev: process.env.NODE_ENV === 'development',
    },
  },
};

export default config;
