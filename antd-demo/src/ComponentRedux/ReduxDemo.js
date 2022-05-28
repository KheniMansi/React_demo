import React from "react";

export default function ReduxDemo(){
    return(
        <>
            <div>
                <h2>Incremkent/Decrement</h2>
                <div className="quantity">
                    <a href="/#" className="quantity_minus"><span> - </span></a>
                    <input type="number" value="0" />
                    <a href="/#"><span> + </span></a>
                </div>
            </div>
        </>
    )
}