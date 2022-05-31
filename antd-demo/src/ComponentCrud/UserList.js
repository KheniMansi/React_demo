import React from "react";

export default function UserList() {
    return (
        <>
            <div className="container">
                <h2 className="my-5 mx-auto text-center">User List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}