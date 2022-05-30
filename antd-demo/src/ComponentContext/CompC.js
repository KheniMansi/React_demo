import React from "react";
import { Text, Text2 } from "../App";

export default function CompC() {
    return (
        <>
            <Text.Consumer>
                {(text) => {
                    return (
                        <Text2.Consumer>
                            {(text2) => {
                                return(
                                    <h1>
                                        Hello CreateContext {text} {text2}
                                    </h1>
                                )
                            }}
                        </Text2.Consumer>
                    )
                }}
            </Text.Consumer>
        </>
    )
}