function fail() {
    return Math.floor(Math.random() * (5 - 1)) === 3;
}

function generateId() {
    return Math.random().toString(36).substring(2);
}

export const API = {
    todos: [
        {
            id: generateId(),
            name: 'Walk the dog',
            complete: false,
        },
        {
            id: generateId(),
            name: 'Wash the car',
            complete: false,
        },
        {
            id: generateId(),
            name: 'Go to the gym',
            complete: true,
        },
    ],

    fetchTodos() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(this.todos);
            }, 3000);
        });
    },

    saveTodo(name) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                const todo = {
                    id: generateId(),
                    name: name,
                    complete: false,
                };
                this.todos = this.todos.concat([todo]);
                fail() ? rej(todo) : res(todo);
            }, 800);
        });
    },

    deleteTodo(id) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.todos = this.todos.filter((todo) => todo.id !== id);
                fail() ? rej() : res(this.todos);
            }, 300);
        });
    },

    updateTodo(updated) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.todos = this.todos.map((todo) =>
                    todo.id !== updated.id ? todo : { ...todo, ...updated }
                );
                fail() ? rej() : res(this.todos);
            }, 300);
        });
    },
};
