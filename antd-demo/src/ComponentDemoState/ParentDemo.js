import React, { useState } from "react";
// import ChildA from "./ChildA";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

export default function ParentDemo(){
    const [text, setText] = useState("");
    return(
        <>
            <ChildB setText={setText} text={text} />
            <ChildA text={text} />
        </>
    )
}