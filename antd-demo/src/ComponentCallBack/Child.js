import React, { useEffect, useState } from "react";

export default function Child({getItems}){
    const [items ,setItems] = useState([])
    useEffect(()=> {
        setItems(getItems())
    }, [getItems])
    // console.log(items);
    return(
        <>
            <div>
                {items && items.map(item=>{
                // console.log(item);
                   return <div key={item}>{item}</div>
                })}
            </div>
        </>
    )
}