import React from "react";
import DemoChildSecond from "./DemoChildSecond";

export default function DemoChildOne(props){
    return(
        <>
            <DemoChildSecond textDemo={props.textDemo}/>
        </>
    )
}