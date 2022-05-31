// const initialState = {
//     login: { email: "eve.holt@reqres.in", password: "cityslicka" },
//     userAdd: { fname: "jack", lname: "user", email: "jackUser@gmail.com" }
// };

const login = (state = 0, action) => {
    switch (action.type) {
        case "LOGIN":
            var login = async () => {
                const rawResponse = await fetch('https://reqres.in/api/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: action.payload.email, password: action.payload.password })
                });
                const content = await rawResponse.json();
                console.log(content);
                if (content.error) {
                    return content;
                } else {

                    localStorage.setItem("email", "eve.holt@reqres.in");
                    localStorage.setItem("token", content.token);
                }
            }
            return login();
            
        case "ADDUSER":
            console.log(action.payload)
            var addUser = async () => {
                const rawResponse = await fetch('https://reqres.in/api/users', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({fname: action.payload.fname, lname: action.payload.lname, email: action.payload.email })
                });
                const content = await rawResponse.json();

                console.log(content);
                console.log(rawResponse);
                if (rawResponse.status === 404) {
                    return content;
                } else {
                    return content;
                }
            }
            return addUser();
        // case "EDITUSER":
        //     var editUser = async () => {
        //         const rawResponse = await fetch('https://reqres.in/api/users/' + value, {
        //           method: 'PUT',
        //           headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //           },
        //           body: JSON.stringify()
        //         });
        //         const content = await rawResponse.json();
        
        //         console.log(content);
        //         if (rawResponse.status == 404) {
        //           alert("Something went wrong please try again");
        //         } else {
        //           alert("User update sucessfully");
        //           window.location.href = "user.html";
        //         }
        //     }
        //     return editUser();
        default: return state;
    }
}
export default login;