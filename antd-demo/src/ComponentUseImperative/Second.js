import React, {forwardRef, useImperativeHandle, useState} from "react";

const Second = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
    useImperativeHandle(ref,()=>({
        increment
    }))
    function increment(){
        setCount(count + 1)
    }
    return(
        <>
            {count}
            <button onClick={increment}>Child Click </button>
        </>
    )

})
export default Second;