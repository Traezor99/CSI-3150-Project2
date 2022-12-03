import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import MainCalc from "./MainCalc";

const ScientificCalc = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <SafeAreaView style={tw`bg-white h-full pt-10`}>
            <View style={tw`p-1`}>
                <TouchableOpacity onPress={() => navigation.navigate(MainCalc)} style={tw`pl-2 pb-8 pt-4 bg-gray-200 m-2 w-40`} disabled={false}>
                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Text style={tw`mt-2 text-lg font-semibold`}>{"S view"}</Text>
                        <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ScientificCalc;
