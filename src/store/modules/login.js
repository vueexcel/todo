export default {
    state: {
        username: "",
        password: "",
        user: {}
    },
    getters: {
        getUser: state => state.user,
        isLoggedIn: state => state.user.username ? true : false
    },
    actions: {
        login({ commit }, payload) {
            commit("login", payload);
            commit("updateUsername", "");
            commit("updatePassword", "");
        },
        logout({ commit }) {
            commit("logout")
        }
    },
    mutations: {
        login: (state, data) => {
            state.user = data;
        },
        logout: (state) => {
            state.user = {};
        },
        updateUsername: (state, data) => {
            state.username = data;
        },
        updatePassword: (state, data) => {
            state.password = data;
        }
    }
}