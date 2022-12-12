import { StyleSheet, TouchableOpacity, View, Image, SafeAreaView, Alert, TextInput } from "react-native";
import React from "react";
import MainCalc from "../components/MainCalc";
import ScientificCalc from "../components/ScientificCalc";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// add the styling for android only
const styles = StyleSheet.create({
    AndroidSafeArea: {
        backgroundColor: "white",
        height: "100%",
        paddingTop: Platform.OS === "android" ? 50 : 0,
    },
    HomeButtons: {
        marginRight: 10,
        width: "20%",
        height: "75%",
    },
    ImageFormat: {
        width: "100%",
        height: "100%",
    },
    TextInput: {
        width: "100%",
        paddingRight: 10,
        paddingLeft: 10,
        color: "black",
        fontSize: 48,
        textAlign: "right",
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
    row: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
    },
});

const HomeScreen = () => {
    const Tab = createMaterialTopTabNavigator();
    const [display, setDisplay] = React.useState("0"); //Also store the previous result

    const calculate = (str) => {
        try {
            const Parser = require("expr-eval").Parser;
            const parser = new Parser();
            parser.consts.π = Math.PI;
            parser.consts.e = Math.E;
            parser.functions.rad = function (x) {
                return x * (Math.PI / 180);
            };
            let result = parser.parse(str).evaluate();
            setDisplay(`${parseFloat(result.toFixed(7))}`);
        } catch (ex) {
            Alert.alert("Invalid format");
        }
    };

    const backSpace = () => {
        if (display.length > 1) setDisplay(display.substring(0, display.length - 1));
        else setDisplay("0");
    };

    const updateDisplay = (value) => {
        if (value == "clear") setDisplay("0");
        else if (display == "0") setDisplay(value);
        else setDisplay(display + value);
    };

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <TextInput style={styles.TextInput} onChangeText={setDisplay} value={display} editable={false} />
            <View style={{ height: "20%" }}></View>
            <View style={styles.row}>
                <TouchableOpacity onPress={backSpace} style={styles.HomeButtons} disabled={false}>
                    <Image style={styles.ImageFormat} resizeMode={"contain"} source={require("../assets/backspace.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ height: "65%" }}>
                <Tab.Navigator>
                    <Tab.Screen name="Standard" children={() => <MainCalc setDisplay={updateDisplay} calculate={() => calculate(display)} />} />
                    <Tab.Screen
                        name="Scientific"
                        children={() => <ScientificCalc setDisplay={updateDisplay} calculate={() => calculate(display)} />}
                    />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
