import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StepsEight() {
    const [selected, setSelected] = useState(0);

    const options = [
        "Refined",
        "Bold",
        "Classic",
        "Edgy",
        "Curious",
        "Grounded",
        "Vibrant",
    ];

    return (
        <SafeAreaView style={styles.container}>
            {options.map((item, index) => {
                const isSelected = selected === index;

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelected(index)}
                        style={[
                            styles.optionBox,
                            isSelected && styles.selectedBox,
                        ]}
                    >
                        <View style={styles.leftSection}>
                            <View
                                style={[
                                    styles.radioOuter,
                                    isSelected && styles.radioOuterSelected,
                                ]}
                            >
                                {isSelected && <View style={styles.radioInner} />}
                            </View>

                            <Text
                                style={[
                                    styles.optionText,
                                    isSelected && styles.selectedText,
                                ]}
                            >
                                {item}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },

    optionBox: {
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 15,
        marginBottom: 12,
        backgroundColor: "#0d0d12",
    },

    selectedBox: {
        borderColor: "#F3DEB1",
        backgroundColor: "rgba(243,222,177,0.08)",
    },

    leftSection: {
        flexDirection: "row",
        alignItems: "center",
    },

    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#555",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    radioOuterSelected: {
        borderColor: "#F3DEB1",
    },

    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#F3DEB1",
    },

    optionText: {
        color: "#aaa",
        fontSize: 14,
        flex: 1,
        textTransform: "uppercase",
    },

    selectedText: {
        color: "#F3DEB1",
    },
});