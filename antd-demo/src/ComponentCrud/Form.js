import React, { useState } from "react";
import { addUser } from "./action/index";
import { useDispatch } from "react-redux";

export default function From() {
    const [inputs, setInputs] = useState({
        fname: '',
        lname: '',
        email: ''
    });
    const { fname, lname, email } = inputs;
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        if (fname && lname && email) {
            dispatch(addUser(fname, lname, email ));
        }
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2 className="my-5 text-center mx-auto">Add User</h2>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="fname" className="form-control" onChange={handleChange} placeholder="Please enter first name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="lname" className="form-control" onChange={handleChange} placeholder="please enter last name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" onChange={handleChange} placeholder="Please enter email address" required="required" />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}