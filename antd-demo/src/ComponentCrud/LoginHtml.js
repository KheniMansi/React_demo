import React, { useState } from "react";
import { login } from "./action/index";
import { useDispatch } from "react-redux";

export default function LoginHtml(){
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const { email, password } = inputs;
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(email)
        if (email && password) {
            dispatch(login(email, password));
        }
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }
    return(
        <>
            <div className="container">
                <div className="col-md-8 m-auto">
                    <h2 className="my-5">Login</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" onChange={handleChange} placeholder="Please enter email" required="required" />
                        </div><br />
                        <div className="form-group">
                            <input type="password" name="password" className="form-control" onChange={handleChange} placeholder="Please enter password" required="required" />
                        </div><br />
                        <div className="form-group m-auto text-center">
                            {/* <button type="submit" onClick={ () => dispatch(login()) }> Login </button> */}
                            <button type="submit"> Login </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}