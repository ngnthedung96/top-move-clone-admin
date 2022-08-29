import Vue from 'vue'
import {BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'
import vco from "v-click-outside"
import router from './router/index'
import Scrollspy from 'vue2-scrollspy';
import VueSweetalert2 from 'vue-sweetalert2';
import store from '@/state/store'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// config axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3333/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use((config) => {
  const token = store.getters['authfack/token'];
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const refreshToken = store.getters['authfack/refreshToken'];
    const originalConfig = err.config;
    
    if (originalConfig.url !== "/auth/login" && originalConfig.url !== "/auth/refresh" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await axios.post("/auth/refresh", {
            refreshToken: refreshToken,
          });

          if(!rs.data.error) {
            const data = rs.data.data
            store.dispatch('authfack/refreshToken', data);
          }
          return axios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    else {
      console.log('url: ', originalConfig.url)
      console.log('url: ', err.response.status)
      store.dispatch('authfack/logout');
    }
    return Promise.reject(err);
  }
)
Vue.prototype.$axios = axios

// for notifying
import Snotify, { SnotifyPosition } from 'vue-snotify';
// You also need to import the styles. If you're using webpack's css-loader, you can do so here:
import 'vue-snotify/styles/material.css'; // or dark.css or simple.css
const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}
Vue.use(Snotify, options)

// socketio
/*import { io } from "socket.io-client";
import VueSocketIO from 'vue-socket.io'
Vue.config.productionTip = false
//const options = { path: '/my-app/' }; //Options object to pass into SocketIO

Vue.use(new VueSocketIO({
  debug: true,
  connection: io('http://localhost:3333'), //options object is Optional
  /*vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
);*/

import "../src/design/app.scss";

import App from './App.vue'

import { initFirebaseBackend } from './authUtils'
import i18n from './i18n'

import tinymce from 'vue-tinymce-editor'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTId,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPId,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};

Vue.component('tinymce', tinymce)
Vue.use(VueRouter)
Vue.use(vco)
Vue.use(Scrollspy);
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(require('vue-chartist'))
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places',
  },
  installComponents: true
})
Vue.component('apexchart', VueApexCharts)

export const bus = new Vue();
new Vue({
  /*sockets: {
    connect: function () {
        console.log('socket connected')
    },
    customEmit: function (data) {
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', data)
    }
  },
  methods: {
      clickButton: function (data) {
          // $socket is socket.io-client instance
          this.$socket.emit('emit_method', data)
      }
  },*/
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
