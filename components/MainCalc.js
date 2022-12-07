import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CalcButton from "./CalcButton";
import EqualButton from "./CalcButton";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "23%",
    },
    buttonLabel: {
        fontSize: 24,
        fontWeight: "500",
        color: "coral",
        textAlign: "center",
    },
    main: {
        backgroundColor: "white",
        height: "100%",
        padding: 10,
        flex: 1,
    },
});

//Add clear button to this and the scientific view.
const MainCalc = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.row}>
                <CalcButton key={"("} value={"("} text={"("} press={props.setDisplay} />
                <CalcButton key={")"} value={")"} text={")"} press={props.setDisplay} />
                <CalcButton key={"^"} value={"^"} text={"^"} press={props.setDisplay} />
                <CalcButton key={"/"} value={"/"} text={"÷"} press={props.setDisplay} />

                <CalcButton key={"7"} value={"7"} text={"7"} press={props.setDisplay} />
                <CalcButton key={"8"} value={"8"} text={"8"} press={props.setDisplay} />
                <CalcButton key={"9"} value={"9"} text={"9"} press={props.setDisplay} />
                <CalcButton key={"*"} value={"*"} text={"x"} press={props.setDisplay} />

                <CalcButton key={"4"} value={"4"} text={"4"} press={props.setDisplay} />
                <CalcButton key={"5"} value={"5"} text={"5"} press={props.setDisplay} />
                <CalcButton key={"6"} value={"6"} text={"6"} press={props.setDisplay} />
                <CalcButton key={"-"} value={"-"} text={"-"} press={props.setDisplay} />

                <CalcButton key={"1"} value={"1"} text={"1"} press={props.setDisplay} />
                <CalcButton key={"2"} value={"2"} text={"2"} press={props.setDisplay} />
                <CalcButton key={"3"} value={"3"} text={"3"} press={props.setDisplay} />
                <CalcButton key={"+"} value={"+"} text={"+"} press={props.setDisplay} />

                <CalcButton key={"sign"} value={"-"} text={"-"} press={props.setDisplay} />
                <CalcButton key={"0"} value={"0"} text={"0"} press={props.setDisplay} />
                <CalcButton key={"."} value={"."} text={"."} press={props.setDisplay} />
                <EqualButton key={"="} value={"="} text={"="} press={props.calculate} />
            </View>
        </View>
    );
};

export default MainCalc;
