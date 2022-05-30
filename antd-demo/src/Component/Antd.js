import React from "react";
import Button from "./AntdHtml";

export default function Antd(){
    // const [allValues, setAllValues] = useState({
    //     loading: false,
    //     danger: false,
    //     type: "primary",
    // });
    // console.log(allValues);
    return(
        <>
            <Button loading={true} color={"primary"}>Button </Button> 
        </>
    )
}