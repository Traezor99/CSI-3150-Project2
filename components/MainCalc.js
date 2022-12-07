import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import React, { useState } from "react";

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

const MainCalc = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.row}>
                {props.values.map((value) => (
                    <TouchableOpacity key={value} onPress={() => props.func(value)} style={styles.button}>
                        <Text style={styles.buttonLabel}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default MainCalc;
