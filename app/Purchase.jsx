import Paragraph from "@/components/ui/Paragraph";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image } from "react-native";

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PaymentScreen() {
    const [selected, setSelected] = useState("paypal");

    const PaymentOption = ({ title, subtitle, value }) => {
        const isActive = selected === value;

        return (
            <TouchableOpacity
                style={[
                    styles.optionContainer,
                    isActive && styles.activeOption,
                ]}
                onPress={() => setSelected(value)}
            >
                <View style={styles.radioCircle}>
                    {isActive && <View style={styles.selectedDot} />}
                </View>

                <View>
                    <Text style={styles.optionTitle}>{title}</Text>
                    {subtitle && (
                        <Text style={styles.optionSubtitle}>{subtitle}</Text>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.fullsignup}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 30, paddingTop: 20, paddingHorizontal: 20, width: "100%", zIndex: 2, alignItems: "center" }}>
                <Image
                    source={require('../assets/images/roundarows.png')}
                    style={{ width: 40, height: 40, position: "absolute", left: 12 }}
                />
                <Paragraph style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                    Choose Your Plans
                </Paragraph>
            </View>
            <Text style={styles.header}>PAYMENT METHOD</Text>

            <PaymentOption
                title="MASTER CARD"
                subtitle="********8463"
                value="card"
            />

            <PaymentOption
                title="PAYPAL"
                subtitle="ARB****@gmail.com"
                value="paypal"
            />

            <PaymentOption
                title="APPLE PAY"
                value="apple"
            />

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addText}>ADD PAYMENT METHOD</Text>
            </TouchableOpacity>

            <LinearGradient
                colors={["#ff7eb3", "#6a8dff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.payNowButton}
            >
                <Text style={styles.payNowText}>PAY NOW</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    fullsignup: {
        flex: 1,
        backgroundColor: "#111",
        padding: 20,
        justifyContent: "center",
    },
    header: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#444",
        marginBottom: 15,
    },
    activeOption: {
        borderColor: "#00d4ff",
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },
    selectedDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#00d4ff",
    },
    optionTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
    optionSubtitle: {
        color: "#aaa",
        fontSize: 14,
    },
    addButton: {
        backgroundColor: "#ff7eb3",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10,
    },
    addText: {
        color: "#fff",
        fontWeight: "600",
    },
    payNowButton: {
        padding: 18,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 20,
    },
    payNowText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },
});