const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = () => {
    return fetch(baseUrl)
        .then(response => response.json())
}

export const createTodo = (name) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, isComplete: false })
    })
        .then(response => response.json())
}



export const updateTodo = (todo) => {
    return fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(response => response.json())
}

export const destroyTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}