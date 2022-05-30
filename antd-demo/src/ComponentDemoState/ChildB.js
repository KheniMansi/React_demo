import React from "react";

export default function ChildC(props){
    function hanldeChange(e){
        props.setText(e.target.value);
    }
    return(
        <>
            <h2>Demo</h2>
            <input type="text" onChange={hanldeChange} value={props.text} />
        </>
    )
}