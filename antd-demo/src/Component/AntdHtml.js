import React, { useState } from "react";

export default function Button(props){
    const [loader, setLoader] = useState('');
    const [color, setColor] = useState('');
    
    const handleClick = () => {
        // console.log(props.loading);
        if(props.loading === true){
           setLoader(<i className="fa fa-spinner" aria-hidden="true"></i>);
        } 
        if(props.color === 'primary'){
            setColor('primaryBtn')
        } else if(props.color === 'danger'){
            setColor('dangerBtn')
        }
    }
    return(
        <>
            <button onClick={handleClick} className={color}><span>{loader}</span> Hello World</button>
        </>
    )
}