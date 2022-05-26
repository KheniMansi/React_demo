import React, {useRef} from "react";

export default function UseRef(){
    function handelInput(){
        inputRef.current.value = "10000";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        console.log(inputRef);
    }
    var inputRef = useRef(null)
    return(
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={handelInput}>Use Ref Demo</button>
            </div>
        </>
    )
}