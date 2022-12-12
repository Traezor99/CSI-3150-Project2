import { StyleSheet, View } from "react-native";
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
                <CalcButton buttonKey={"clear"} value={"clear"} text={"C"} press={props.setDisplay} />
                <CalcButton buttonKey={"("} value={"("} text={"("} press={props.setDisplay} />
                <CalcButton buttonKey={")"} value={")"} text={")"} press={props.setDisplay} />
                <CalcButton buttonKey={"abs"} value={"abs("} text={"|x|"} press={props.setDisplay} />

                <CalcButton buttonKey={"sin"} value={"sin("} text={"sin"} press={props.setDisplay} />
                <CalcButton buttonKey={"cos"} value={"cos("} text={"cos"} press={props.setDisplay} />
                <CalcButton buttonKey={"tan"} value={"tan("} text={"tan"} press={props.setDisplay} />
                <CalcButton buttonKey={"rad"} value={"rad("} text={"rad"} press={props.setDisplay} />

                <CalcButton buttonKey={"asin"} value={"asin("} text={"asin"} press={props.setDisplay} />
                <CalcButton buttonKey={"acos"} value={"acos("} text={"acos"} press={props.setDisplay} />
                <CalcButton buttonKey={"atan"} value={"atan("} text={"atan"} press={props.setDisplay} />
                <CalcButton buttonKey={"!"} value={"!"} text={"!"} press={props.setDisplay} />

                <CalcButton buttonKey={"ln"} value={"ln("} text={"ln"} press={props.setDisplay} />
                <CalcButton buttonKey={"log"} value={"log10("} text={"log"} press={props.setDisplay} />
                <CalcButton buttonKey={"sqrt"} value={"sqrt("} text={"√"} press={props.setDisplay} />
                <CalcButton buttonKey={"^"} value={"^"} text={"^"} press={props.setDisplay} />

                <CalcButton buttonKey={"sign"} value={"-"} text={"-"} press={props.setDisplay} />
                <CalcButton buttonKey={"π"} value={"π"} text={"π"} press={props.setDisplay} />
                <CalcButton buttonKey={"e"} value={"e"} text={"e"} press={props.setDisplay} />
                <EqualButton buttonKey={"="} value={"="} text={"="} press={props.calculate} />
            </View>
        </View>
    );
};

export default ScientificCalc;
