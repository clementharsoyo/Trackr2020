import axios from 'axios'

export const register = (newUser) => {
    return axios
        .post("https://localhost:5000/routes/users/" + "signup", { 
            username: newUser.username,
            password: newUser.password,
            email: newUser.email
        })
        .then(response => {
            console.log("Registered")
        })
}

export const login = (user) => {
    return axios
        .post("https://localhost:5000/routes/users/" + "signin", {
            username: user.username,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}