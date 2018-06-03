export default {
    state: {
        todos : []
    },
    getters: {
        allTodos: state => state.todos,
        getCompletedTodos: (state) => {
            return state.todos.filter( todo => todo.isCompleted)
        }
    },
    mutations: {
        addTodo: (state, todo) => {
            state.todos.push(todo);
        },
        completeTodo : (state, id) => {
            state.todos.map((todo, index) => {
                if(id === index)
                    todo.isCompleted = true;
                return todo;
            })
        }
    }
}