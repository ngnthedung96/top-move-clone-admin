import router from '../../router/index'
import tokenService from "@/services/token.service"
import axios from "axios";

export const state = {
    currentAdmin: tokenService.getAdmin()
}

export const actions = {
    // Logs in the Admin.
    // eslint-disable-next-line no-unused-vars
    async login({ dispatch, commit }, { phone, password }) {
        try {
            const result = await axios.post('/auth/login', { phone, password })
            const { msg, error, data } = result.data;
            if (error) {
                dispatch('notification/error', msg, { root: true });
            }
            else {
                tokenService.setAdmin(data)
                commit('loginSuccess', data);
                router.push('/');
            }
        } catch (err) {
            dispatch('notification/error', err.message, { root: true })
        }
    },
    // Logout the Admin
    async logout({ commit }) {
        console.log('chay logout')
        tokenService.removeAdmin()
        await axios.post('/auth/logout')
        commit('logout');
        router.push('/login');
    },
    refreshToken({ commit }, data) {
        tokenService.updateLocalToken(data.token, data.refreshToken)
        commit('refreshToken', data);
    },
    // register the Admin
    async registerAdmin({ dispatch, commit }, Admin) {
        const result = await axios.post('/auth/register', Admin)
        const { msg, error, data } = result.data;
        if (error) {
            dispatch('notification/error', msg, { root: true });
        }
        else {
            commit('registerSuccess', data);
            dispatch('notification/success', msg, { root: true });
            localStorage.setItem('admin', JSON.stringify(data))
            router.push('/login');
        }
    }
};

export const getters = {
    loggedIn(state) {
        return !!state.currentAdmin
    },
    token(state) {
        let token = ''
        if (state.currentAdmin) {
            token = state.currentAdmin.token
        }

        return token
    },
    refreshToken(state) {
        let rftoken = ''
        if (state.currentAdmin) {
            rftoken = state.currentAdmin.refreshToken
        }

        return rftoken
    }
}

export const mutations = {
    loginSuccess(state, data) {
        state.currentAdmin = data;
    },
    logout(state) {
        state.currentAdmin = null;
    },
    registerSuccess(state, data) {
        state.currentAdmin = data;
    },
    refreshToken(state, data) {
        state.currentAdmin = data;
    }
};

