import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ScientificScreen from "./screens/ScientificScreen";
import store from "./store";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
                        style={{ flex: 1 }}
                    >
                        <Stack.Navigator>
                            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="ScientificScreen" component={ScientificScreen} options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}

/**
 * Note on Flex containers:
 * -- by default flex container direction on web apps is row
 * -- for mobile device flex container is column based by default
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
