import React, {useDebugValue, useEffect} from "react";

export default function Usgdebug(value){
    useDebugValue(value)
    useEffect(() =>{
        console.log(value);

        <></>
    }, [value])
}