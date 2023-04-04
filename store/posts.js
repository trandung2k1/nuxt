export const state = () => ({
    posts: [],
    post: null,
});
export const getters = {
    getPosts(state) {
        return state.posts;
    },
};

export const mutations = {
    SET_POSTS(state, payload) {
        state.posts = payload;
    },
    SET_POST(state, payload) {
        state.post = payload;
    },
};

export const actions = {
    async setPosts({ commit }) {
        try {
            const data = await this.$axios.$get(
                'https://jsonplaceholder.typicode.com/posts?_limit=5',
            );
            commit('SET_POSTS', data);
        } catch (error) {
            console.log(error);
        }
    },
    async getPostById({ commit }, id) {
        const data = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit('SET_POST', data);
    },
};
