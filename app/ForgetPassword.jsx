import H1 from '@/components/ui/H1';
import Labeltext from '@/components/ui/Labeltext';
import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height } = Dimensions.get("window");


const ForgetPassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <SafeAreaView style={styles.fullsignup}>

            <View style={styles.topsctions}>
                <View style={{ flexDirection: "row", width: "100%", textAlign: "center", marginTop: 20, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={styles.backButton}
                    >
                        <Image source={require('../assets/images/backpng.png')} style={styles.backIcon} />
                    </TouchableOpacity>

                    <Image source={require('../assets/images/logo-louis.png')} style={styles.logo} />

                </View>


                <View style={styles.verifySection}>
                    <TouchableOpacity>

                        <H1>FORGOT PASSWORD</H1>
                    </TouchableOpacity>
                    <Paragraph>Enter your registered email address and we'll send you a secure verification code.</Paragraph>
                    <View style={styles.comoninputs}>
                        <Labeltext>Email Address</Labeltext>
                        <TextInput
                            placeholder="e.g. noah@gmail.com"
                            placeholderTextColor="#888"
                            style={styles.input}
                        />
                    </View>

                    

                </View>

            </View>


            <View style={styles.bottomactions}>
                <ThemeButton style={styles.signinbtn} text="SEND VERIFICATION CODE" onPress={() => router.push('/AccountVerify')} />
            </View>

        </SafeAreaView>
    )
}
export default ForgetPassword;

const styles = StyleSheet.create({
    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,

    },
    backButton: {
        position: "absolute",
        top: 30,
        left: 0,
        zIndex: 10,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: "center",
        justifyContent: "center",
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
        backgroundColor: "#000",
        borderRadius: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#333",
        color: "#fff",
        paddingVertical: 5,
        height: 48,
        fontSize: 14,
        width: "100%",
        marginTop: 10,
    },

    verifySection: {
        justifyContent: "center",
        alignItems: "start",
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








});