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
        flex: 1,
        fontSize: 24,
        color: "gray",
        borderWidth: 1,
        margin: 2,
    },
    ButtonText: {
        color: "red",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: "center",
        padding: 0,
        margin: 0,
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
    const [calc, setDisplay] = React.useState("0"); //Also store the previous result

    const calculate = (str) => {
        const Parser = require("expr-eval").Parser;
        const parser = new Parser();
        let result = parser.parse(str).evaluate();
        setDisplay(`${parseFloat(result.toFixed(7))}`);
    };

    const backSpace = () => {
        if (calc.length > 1) setDisplay(calc.substring(0, calc.length - 1));
        else setDisplay("0");
    };

    return (
        <SafeAreaView style={[tw`bg-white h-full`, styles.AndroidSafeArea]}>
            <TextInput style={styles.TextInput} onChangeText={setDisplay} value={calc} editable={true} />
            <View style={{ flexDirection: "row", flex: 1 }}>
                <TouchableOpacity onPress={() => setDisplay("0")} style={styles.HomeButtons} disabled={false}>
                    <Text style={styles.ButtonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={backSpace} style={styles.HomeButtons} disabled={false}>
                    <Text style={styles.ButtonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => calculate(calc)} style={styles.HomeButtons} disabled={false}>
                    <Text style={styles.ButtonText}>=</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: "84%" }}>
                <Tab.Navigator>
                    <Tab.Screen name="MainCalc" component={MainCalc} />
                    <Tab.Screen name="ScientificCalc" component={ScientificCalc} />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
