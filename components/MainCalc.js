import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import ScientificCalc from "./MainCalc";

const MainCalc = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <View style={tw`p-1`}>
            <Text>Hello there</Text>
            {/*<TouchableOpacity onPress={() => navigation.navigate(ScientificCalc)} style={tw`pl-2 pb-8 pt-4 bg-gray-200 m-2 w-40`} disabled={false}>
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{"Main view"}</Text>
                    <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign" />
                </View>
    </TouchableOpacity>*/}
        </View>
    );
};

export default MainCalc;
