import React from "react";
import {Button} from "antd";


export default function AntdDemo(props){
    const handleClick = () => {
        props.setAllValues({...props.allValues, loading: true, danger: true, type: "dashed"})
    }
    return(
        <>
            <Button onClick={handleClick} loading={props.allValues.loading} danger={props.allValues.danger} type={props.allValues.type}>Button</Button>
        </>
    )
}