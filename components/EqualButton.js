import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const styles = StyleSheet.create({
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
});

const EqualButton = (props) => {
    return (
        <TouchableOpacity key={props.key} onPress={props.press} style={styles.button}>
            <Text style={styles.buttonLabel}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default EqualButton;
