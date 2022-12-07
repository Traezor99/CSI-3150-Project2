import { StyleSheet, TouchableOpacity, Button, Text, View, SafeAreaView, Alert, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import MainCalc from "../components/MainCalc";
import ScientificCalc from "../components/ScientificCalc";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// add the styling for android only
const styles = StyleSheet.create({
    AndroidSafeArea: {
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 50 : 0,
    },
    HomeButtons: {
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "23%",
    },
    ButtonText: {
        color: "red",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: "center",
        padding: 0,
    },
    TextInput: {
        width: "100%",
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        color: "black",
        fontSize: 48,
        textAlign: "right",
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
});

const HomeScreen = () => {
    const Tab = createMaterialTopTabNavigator();
    const [display, setDisplay] = React.useState("0"); //Also store the previous result

    const calculate = (str) => {
        try {
            //let newStr = str.replace("π", "PI");
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
            console.log(ex);
            //TODO: display something to the user that says the format is bad
        }
    };

    const backSpace = () => {
        if (display.length > 1) setDisplay(display.substring(0, display.length - 1));
        else setDisplay("0");
    };

    const updateDisplay = (value) => {
        if (display == "0") setDisplay(value);
        else setDisplay(display + value);
    };

    return (
        <SafeAreaView style={[tw`bg-white h-full`, styles.AndroidSafeArea]}>
            <TextInput style={styles.TextInput} onChangeText={setDisplay} value={display} editable={false} />
            <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
                <TouchableOpacity onPress={() => setDisplay("0")} style={styles.HomeButtons} disabled={false}>
                    <Text style={styles.ButtonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={backSpace} style={styles.HomeButtons} disabled={false}>
                    <Text style={styles.ButtonText}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: "70%" }}>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Standard"
                        children={() => (
                            <MainCalc
                                //values={["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "-/+", "0", ".", "/"]}
                                setDisplay={updateDisplay}
                                calculate={() => calculate(display)}
                            />
                        )}
                    />
                    <Tab.Screen
                        name="Scientific"
                        children={() => (
                            <ScientificCalc
                                //values={["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "-/+", "0", ".", "/"]}
                                setDisplay={updateDisplay}
                                calculate={() => calculate(display)}
                            />
                        )}
                    />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
