import axios from "axios";

export const state = {
    todos: [],
};

export const getters = {
    todos: state => state.todos,
};

export const mutations = {
    setTodos(state, newValue) {
        state.todos = newValue
    },
};

export const actions = {
    fetchTodos({ commit }) {
        axios.get('http://localhost:3333/api/roles').then(res => {
            commit('setTodos', res.data.data)
        })
    },
};
