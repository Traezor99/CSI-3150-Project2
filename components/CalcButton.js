import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 15,
        backgroundColor: "#F6FBFF",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "23%",
    },
    buttonLabel: {
        fontSize: 24,
        fontWeight: "500",
        color: "#A77A53",
        textAlign: "center",
        width: "100%",
        paddingTop: "20%",
        paddingBottom: "20%",
        textAlignVertical: "center",
    },
});

const CalcButton = (props) => {
    return (
        <TouchableOpacity key={props.buttonKey} onPress={() => props.press(props.value)} style={styles.button}>
            <Text style={styles.buttonLabel}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default CalcButton;
