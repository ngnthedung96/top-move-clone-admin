import Vue from 'vue';
import io from 'socket.io';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = io('http://localhost:4113');

Vue.use(VueSocketIO, SocketInstance)