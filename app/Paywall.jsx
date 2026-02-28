import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height } = Dimensions.get("window");


const Paywall = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.fullsignup}>

            <View style={styles.topsctions}>
                <Image source={require('../assets/images/pay-bg.png')} style={styles.bg} />
                <View style={styles.topsdiv}>
                    <Image source={require('../assets/images/prime-logo.png')} style={styles.pricme} />
                    <Paragraph style={{ marginTop: 10, width: "60%", textAlign: "center", alignSelf: "center" }}>Want to shine? Go Premium & get noticed faster!</Paragraph>
                </View>

            </View>
            <View style={styles.card}>

                <Feature icon={<Feather name="upload" size={20} color="#F3DEB1" />} text="Upload unlimited photos & videos" />

                <Feature icon={<Ionicons name="eye-outline" size={20} color="#F3DEB1" />} text="See who viewed your profile" />

                <Feature icon={<MaterialIcons name="star-border" size={20} color="#F3DEB1" />} text="Advanced filters & matching" />

                <Feature icon={<Feather name="trending-up" size={20} color="#F3DEB1" />} text="Highlight your profile to get noticed" />

                <Feature icon={<Ionicons name="ban-outline" size={20} color="#F3DEB1" />} text="Enjoy an ad-free experience" />

            </View>

            <View style={styles.bottomactions}>
                <ThemeButton style={styles.signinbtn} text="Choose Your Plan" onPress={() => router.push('/Plans')} />
            </View>
            <View style={styles.container}>

                <View style={styles.registerRow}>
                    <TouchableOpacity
                        onPress={() => router.push("/signup")}>
                        <Text style={styles.registerText}>Restore Purchases</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rowtext}>
                    <Ionicons name="lock-closed-outline" size={20} color="#F3DEB1" />
                    <Text style={styles.text}>Secure Payment • Trusted by 1M+ users</Text>
                </View>


            </View>
        </SafeAreaView>
    )
}

function Feature({ icon, text }) {
    return (
        <View style={styles.row}>
            {icon}
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default Paywall;

const styles = StyleSheet.create({
    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        width: "100%",
        paddingRight: 2,

    },
    bg: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        zIndex: -1,
        opacity: 0.9,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: "center",
    },
    pricme: {
        width: 218,
        height: 40,
        resizeMode: 'contain',
        alignSelf: "center",
    },
    label: {
        marginBottom: 6,
    },
    topsctions: {
        backgroundColor: '#000',
        padding: 2,
        marginBottom: 20,
        zIndex: 2,
        width: "100%",
        height: "380px",

    },
    bottomactions: {
        backgroundColor: '#000',
        padding: 12,
    },
    comoninputs: {
        backgroundColor: '#000',
        padding: 2,
        width: "100%",
        marginBottom: 10,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#333",
        height: 48,
    },
    passwordInput: {
        flex: 1,
        color: "#fff",
        paddingVertical: 16,
        fontSize: 16,
    },
    input: {
        backgroundColor: "#000",
        borderRadius: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#333",
        color: "#fff",
        paddingVertical: 5,
        height: 48,
        fontSize: 14,
    },
    forgotBtn: {
        width: "100%",
        marginTop: 10,
        alignItems: "flex-end",
    },

    forgotText: {
        color: "#F3DEB1",
        textDecorationLine: "underline",
        fontSize: 14,
    },
    signinbtn: {
        textTransform: "uppercase",
    },
    dividerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#333",
    },

    dividerText: {
        color: "#aaa",
        marginHorizontal: 10,
        fontSize: 14,
    },

    socialRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    socialBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        paddingVertical: 14,
        borderRadius: 12,
        width: "48%",
        borderWidth: 1,
        borderColor: "#333",
    },

    socialText: {
        fontWeight: "500",
        color: "#fff",
    },

    registerRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 15,
    },

    grayText: {
        color: "#888",
    },

    registerText: {
        color: "#F3DEB1",
        textTransform: "uppercase",
        fontSize: 14,
    },

    termsText: {
        color: "#777",
        textAlign: "center",
        fontSize: 12,
    },

    link: {
        color: "#F3DEB1",
        textDecorationLine: "underline",
    },
    card: {
        backgroundColor: "#0d0d0d",
        padding: 20,
        borderRadius: 25,
        width: "90%",
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 10,
        borderWidth: 1,
        borderColor: "#3E3E3E",
        marginTop: -30,
        zIndex: 2,
        left: 20,
        right: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },
    rowtext: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 15,
        marginLeft: 15,
    },
    topsdiv: {
        backgroundColor: '#a6a6a6bc',
        padding: 2,
        zIndex: 2,
        width: "100%",
        height: "200px",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },



});