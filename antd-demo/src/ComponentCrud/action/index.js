export const LOGIN = "LOGIN";

export const login = (email, password) => {
    return{
        type: 'LOGIN',
        payload: {email, password}
    }
}

export const addUser = (fname, lname, email) => {
    return{
        type: 'ADDUSER',
        payload: {fname, lname, email}
    }
}

export const editUser = () => {
    return{
        type: 'EDITUSER'
    }
}