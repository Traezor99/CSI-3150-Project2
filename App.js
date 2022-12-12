import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
                    style={{ flex: 1 }}
                >
                    <HomeScreen />
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
