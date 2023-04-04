export const state = () => ({
    todos: [],
    todo: null,
});
export const getters = {
    getTodos(state) {
        return state.todos;
    },
};

export const mutations = {
    SET_TODOS(state, payload) {
        state.todos = payload;
    },
    SET_TODO(state, payload) {
        state.todo = payload;
    },
};

export const actions = {
    async setTodos({ commit }) {
        try {
            const data = await this.$axios.$get(
                'https://jsonplaceholder.typicode.com/todos?_limit=5',
            );
            commit('SET_TODOS', data);
        } catch (error) {
            console.log(error);
        }
    },
    async getTodoById({ commit }, id) {
        const data = await this.$axios.$get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('SET_TODO', data);
    },
};
