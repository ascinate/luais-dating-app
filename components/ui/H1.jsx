import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import React from "react";
import { Text } from "react-native";

export default function H1({ children, style }) {
    const [fontsLoaded] = useFonts({
        Manrope_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Text style={[
            {
                fontFamily: "Manrope_400Regular",
                color: "#fff",
                fontSize: 35,
            },
            style,
        ]}>
            {children}
        </Text>
    );
}
