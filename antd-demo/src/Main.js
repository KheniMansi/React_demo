import { Routes, Route } from "react-router-dom";
import LoginHtml from './ComponentCrud/LoginHtml';
import UserList from './ComponentCrud/UserList';
import Form from "./ComponentCrud/Form";

export default function Main(){
    return(
        <>
            <Routes>
                <Route path="/login" element={<LoginHtml />}  />
                <Route path="/dashboard" element={<UserList />} />
                <Route path="/user/set" element={<Form />} />
            </Routes>
        </>
    )    
}