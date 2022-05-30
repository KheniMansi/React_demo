import React, { useState, useMemo } from "react";

export default function Usememo(){
    const [btn1, SetButn1] = useState(0)
    const [btn2, SetButn2] = useState(10);
    const multiCountMemo = useMemo(function multicount(){
        return btn1 * 5;
    }, [btn1])
    return(
        <>
            <h2>
                One: {btn1} 
            </h2>
            <h2>
                Two: {btn2} 
            </h2>
            {multiCountMemo}
            <div>
                <button type="button" onClick={() => {SetButn1(btn1 + 1)}}>Button One Memo</button>
                <button type="button" onClick={() => {SetButn2(btn2 * 10)}}>Button Two Memo</button>
            </div>
        </>
    );
}