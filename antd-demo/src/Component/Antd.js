import React, {useState} from "react";
import AntdHtml from "./AntdHtml";

export default function Antd(){
    const [allValues, setAllValues] = useState({
        loading: false,
        danger: false,
        type: "primary",
    });
    console.log(allValues);
    return(
        <>
            <AntdHtml setAllValues={setAllValues} allValues={allValues}/>
        </>
    )
}