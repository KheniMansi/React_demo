import React, { useEffect, useLayoutEffect, useState } from "react";

export default function LayoutEffact() {
    const [text, setText] = useState("fdgf")
    const [loading, setLoad] = useState(true)
    useLayoutEffect(() => {
        console.log("layout")
        if (!loading) {
            console.log("False")
            setText("false")
        } else {
            console.log("True");
            setText("true")
        }
    }, [loading])


    useEffect(() => {
        console.log("only effect")

        if (!loading) {
            setText("Effect demo false")
        } else {
            setText("Effect demo true")
        }
    }, [loading]);
    return (
        <>
            <div>
                {/* <p>Use Effect Demo</p> */}
                <p>{text}</p>
            </div>
        </>
    )
}