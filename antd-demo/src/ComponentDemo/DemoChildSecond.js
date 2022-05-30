import React from "react";
import DemoChilThree from "./DemoChildThree";

export default function DemoChildSecond(props){
    return(
        <>
            <DemoChilThree textDemo={props.textDemo} />
        </>
    )
}