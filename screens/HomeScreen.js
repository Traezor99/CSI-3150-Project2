import { StyleSheet, TouchableOpacity, Button, Text, View, SafeAreaView, Alert } from "react-native";
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
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 50 : 0,
    },
});

const HomeScreen = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <SafeAreaView style={[tw`bg-white h-full pt-10`, styles.AndroidSafeArea]}>
            <Text style={tw`text-red-500 p-10`}>HomeScreen test once again test</Text>
            <TouchableOpacity onPress={() => Alert.alert("test")} style={tw`bg-gray-200 h-16 w-16`} disabled={false}>
                <Text style={[tw`text-xl text-red-600 text-center`, "vertical-align: middle"]}>C</Text>
            </TouchableOpacity>
            <Button title="x" color="#f194ff" onPress={() => Alert.alert("Delete")} />
            <View style={tw`h-1/2`}>
                <Tab.Navigator>
                    <Tab.Screen name="MainCalc" component={MainCalc} />
                    <Tab.Screen name="ScientificCalc" component={ScientificCalc} />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
