import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import tw from "tailwind-react-native-classnames";
import MainCalc from "../components/MainCalc";

// add the styling for android only
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 50 : 0,
    },
});

const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full pt-10`, styles.AndroidSafeArea]}>
            <Text style={tw`text-red-500 p-10`}>HomeScreen test once again test</Text>
            <MainCalc />
        </SafeAreaView>
    );
};

export default HomeScreen;
