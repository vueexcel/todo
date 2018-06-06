export default {
    state: {
        username: "",
        password: "",
    },
    getters: {
    },
    mutations: {
        updateUsername: (state, data) => {
            state.username = data;
        },
        updatePassword: (state, data) => {
            state.password = data;
        }
    }
}