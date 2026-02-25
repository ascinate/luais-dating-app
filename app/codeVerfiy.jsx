import CustomText from '@/components/ui/CustomText';
import H1 from '@/components/ui/H1';
import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';
import { router } from 'expo-router';
import { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height } = Dimensions.get("window");



const codeVerfiy = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        if (/^[0-9]$/.test(text)) {
            const newCode = [...code];
            newCode[index] = text;
            setCode(newCode);

            if (index < 5) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const handleBackspace = (index) => {
        if (index > 0 && code[index] === "") {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <SafeAreaView style={styles.fullsignup}>

            <View style={styles.topsctions}>
                <Image source={require('../assets/images/logo-louis.png')} style={styles.logo} />

                <View style={styles.verifySection}>
                    <H1>Enter your code</H1>
                    <Paragraph style={{ marginTop: 15 }}>We have sent a 6 digit code to +1 254 567 8900.
                        Please enter it below to continue.<TouchableOpacity
                            onPress={() => router.push("/codeVerfiy")}
                            style={styles.forgotBtn}
                        ><CustomText style={styles.changeNumber}> Change Number  </CustomText></TouchableOpacity> </Paragraph>
                    <View style={styles.otpRow}>
                        {code.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (inputs.current[index] = ref)}
                                style={styles.input}
                                keyboardType="number-pad"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === "Backspace") {
                                        handleBackspace(index);
                                    }
                                }}
                            />
                        ))}
                    </View>
                    <Paragraph>We will send a code to this number to verify it's really you.</Paragraph>
                </View>

            </View>


            <View style={styles.bottomactions}>
                <Paragraph> Didn't get the code? Try again in 30 Seconds</Paragraph>
                <ThemeButton style={styles.signinbtn} text="VERIFY" onPress={() => router.push('/home')} />
                <TouchableOpacity
                    onPress={() => router.push("/codeVerfiy")}
                    style={styles.forgotBtnh}
                ><CustomText style={styles.changeNumber}> CALL ME INSTEAD </CustomText></TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default codeVerfiy;

const styles = StyleSheet.create({
    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,

    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: "center",
    },

    topsctions: {
        backgroundColor: '#000',
        padding: 2,
    },
    bottomactions: {
        backgroundColor: '#000',
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    comoninputs: {
        backgroundColor: '#000',
        padding: 2,
        width: "100%",
        marginBottom: 10,
        marginTop: 20,
    },
    changeNumber: {
        color: "#F3DEB1",
        marginBottom: 30,
        textDecorationLine: "underline",
    },

    otpRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginVertical: 15,
    },
    phoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
    },
    passwordInput: {
        flex: 1,
        color: "#fff",
        paddingVertical: 16,
        fontSize: 16,
    },
    input: {
        width: 50,
        height: 55,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 18,
        color: "#fff",
    },

    verifySection: {
        justifyContent: "center",
        alignItems: "center",
        height: height * 0.5,
    },
    signinbtn: {
        textTransform: "uppercase",
        justifyContent: "center",
        alignItems: "center",
        width: "98%",
    },

    countryCode: {
        color: "#aaa",
        fontSize: 14,
        width: "20%",
        backgroundColor: "#000",
        borderRadius: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#333",
        height: 48,
        paddingTop: 4,
    },
    forgotBtn: {
        justifyContent: "center",
        alignItems: "center",
        color: "#F3DEB1",
        marginBottom: 30,
        textDecorationLine: "underline",
        textTransform: "uppercase",
    },








});