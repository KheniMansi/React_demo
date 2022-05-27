import React,{useRef} from "react";
import Second from "./Second";

export default function First(){
    const ref = useRef()
    console.log(ref);
    return(
        <>
            <Second ref={ref} />
            <button onClick={() => ref.current.increment()}>Parent Click</button>
        </>
    )
}