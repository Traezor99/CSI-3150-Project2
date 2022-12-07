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

//Add clear, ^, and maybe something else to this
const ScientificCalc = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.row}>
                <CalcButton key={"("} value={"("} text={"("} press={props.setDisplay} />
                <CalcButton key={")"} value={")"} text={")"} press={props.setDisplay} />
                <CalcButton key={"!"} value={"!"} text={"!"} press={props.setDisplay} />
                <CalcButton key={"abs"} value={"abs("} text={"|x|"} press={props.setDisplay} />

                <CalcButton key={"sin"} value={"sin("} text={"sin"} press={props.setDisplay} />
                <CalcButton key={"cos"} value={"cos("} text={"cos"} press={props.setDisplay} />
                <CalcButton key={"tan"} value={"tan("} text={"tan"} press={props.setDisplay} />
                <CalcButton key={"rad"} value={"rad("} text={"rad"} press={props.setDisplay} />

                <CalcButton key={"asin"} value={"asin("} text={"asin"} press={props.setDisplay} />
                <CalcButton key={"acos"} value={"acos("} text={"acos"} press={props.setDisplay} />
                <CalcButton key={"atan"} value={"atan("} text={"atan"} press={props.setDisplay} />
                <CalcButton key={"π"} value={"π"} text={"π"} press={props.setDisplay} />

                <CalcButton key={"ln"} value={"ln("} text={"ln"} press={props.setDisplay} />
                <CalcButton key={"log"} value={"log("} text={"log"} press={props.setDisplay} />
                <CalcButton key={"sqrt"} value={"sqrt("} text={"√"} press={props.setDisplay} />
                <CalcButton key={"e"} value={"e"} text={"e"} press={props.setDisplay} />

                <CalcButton key={"sign"} value={"-"} text={"-"} press={props.setDisplay} />
                <CalcButton key={"0"} value={"0"} text={"0"} press={props.setDisplay} />
                <CalcButton key={"."} value={"."} text={"."} press={props.setDisplay} />
                <EqualButton key={"="} value={"="} text={"="} press={props.calculate} />
            </View>
        </View>
    );
};

export default ScientificCalc;
