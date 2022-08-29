import axios from "axios";
const BASE_API = "http://localhost:3333/api/users/"

export const state = {
    userDatas: [],
};

export const mutations = {
    fetchData(state, newValue) {
        state.userDatas = newValue
    },
    addData(state, newValue) {
        state.userDatas.unshift(newValue);
    },
    updateData: (state, newValue) => {
        const index = state.userDatas.findIndex(item => item.id === newValue.id);
        if(index !== -1) {
            state.userDatas.splice(index, 1, newValue);
        }
    },
    removeData(state, newValue) {
        const rem = state.userDatas.filter(item => item.id !== newValue.id)
        state.userDatas = state.userDatas.filter(item => item.id !== newValue.id)
    },
};

export const actions = {
    async getListUsers({ commit, dispatch }) {
        try {
            const res = await axios.get(BASE_API);
            console.log(res.data.data)
            commit('fetchData', res.data.data)
        }
        catch (err) {
            dispatch('notification/error', err.response.data.msg, { root: true });
        }
    },
    async createUser({commit, dispatch}, {obj}) {
        let result = false
        try {
            const res = await axios.post(BASE_API, obj)
            const {msg, error, data} = res.data;
            console.log(msg, error, data)
            if(!error) {
                commit('addData', data)
                dispatch('notification/success', 'Create Success', { root: true });
                result = true
            }
            else {
                dispatch('notification/error', msg, { root: true });
            }
        } catch(err) {
            dispatch('notification/error', err.response.data.msg, { root: true });
        }

        return result
    },
    async updateUser({commit, dispatch}, {obj}) {
        let result = false
        try {
            const res = await axios.put(BASE_API + obj.id, obj)
            const {msg, error, data} = res.data;
            if(!error) {
                commit('updateData', data)
                dispatch('notification/success', msg, { root: true });
                result = true
            }
            else {
                dispatch('notification/error', msg, { root: true });
            }
        }
        catch(err) {
            dispatch('notification/error', err.response.data.msg, { root: true });
        }
        return result;
    },
    async deleteUser({commit, dispatch}, { obj } = {}) {
        const res = await axios.delete(BASE_API + obj.id)
        const {msg, error} = res.data;
        if(!error) {
            commit('removeData', obj)
            dispatch('notification/success', msg, { root: true });
        }
        else {
            dispatch('notification/error', err.response.data.msg, { root: true });
        }
    },
};
