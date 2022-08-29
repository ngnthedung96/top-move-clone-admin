import router from '../../router/index'
import tokenService from "@/services/token.service"
import axios from "axios";

export const state = {
    currentUser: tokenService.getUser()
}

export const actions = {
    // Logs in the user.
    // eslint-disable-next-line no-unused-vars
    async login({ dispatch, commit }, { phone, password }) {
        try {
            const result = await axios.post('/auth/login', {phone, password})
            const {msg, error, data} = result.data;
            if(error) {
                dispatch('notification/error', msg, { root: true });
            }
            else {
                tokenService.setUser(data)
                commit('loginSuccess', data);
                router.push('/');
            }
        }catch(err) {
            dispatch('notification/error', err.message, { root: true })
        }
    },
    // Logout the user
    async logout({ commit }) {
        console.log('chay logout')
        tokenService.removeUser()
        await axios.post('/auth/logout')
        commit('logout');
        router.push('/login');
    },
    refreshToken({ commit }, data) {
        tokenService.updateLocalToken(data.token, data.refreshToken)
        commit('refreshToken', data);
    },
    // register the user
    async registeruser({ dispatch, commit }, user) {
        const result = await axios.post('/auth/register', user)
        const {msg, error, data} = result.data;
        if(error) {
            dispatch('notification/error', msg, { root: true });
        }
        else {
            commit('registerSuccess', data);
            dispatch('notification/success', msg, { root: true });
            localStorage.setItem('user', JSON.stringify(data))
            router.push('/login');
        }
    }
};

export const getters = {
    loggedIn(state) {
        return !!state.currentUser
    },
    token(state) {
        let token = ''
        if(state.currentUser) {
            token = state.currentUser.token
        }
        
        return token
    },
    refreshToken(state) {
        let rftoken = ''
        if(state.currentUser) {
            rftoken = state.currentUser.refreshToken
        }
        
        return rftoken
    }
}

export const mutations = {
    loginSuccess(state, data) {
        state.currentUser = data;
    },
    logout(state) {
        state.currentUser = null;
    },
    registerSuccess(state, data) {
        state.currentUser = data;
    },
    refreshToken(state, data) {
        state.currentUser = data;
    }
};

