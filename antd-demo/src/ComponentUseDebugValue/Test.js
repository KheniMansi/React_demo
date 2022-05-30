import React, { useState } from "react";
import useDebug from "./Usedebug";

export default function Test(){
    const [name, setName] = useState("")
    useDebug(name)
    return(
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}