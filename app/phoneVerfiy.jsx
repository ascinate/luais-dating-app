import H1 from '@/components/ui/H1';
import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height } = Dimensions.get("window");


const phoneVerfiy = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <SafeAreaView style={styles.fullsignup}>

            <View style={styles.topsctions}>
                <Image source={require('../assets/images/logo-louis.png')} style={styles.logo} />

                <View style={styles.verifySection}>
                    <H1>VERIFY ITS YOU</H1>
                    <View style={styles.comoninputs}>
                        <View style={styles.phoneContainer}>
                            <View style={styles.countryCode}>
                                <TextInput
                                    placeholder="US +1"
                                    placeholderTextColor="#888"
                                />
                            </View>
                            <TextInput
                                placeholder="xxx xxxx xxxx"
                                placeholderTextColor="#888"
                                style={[styles.input,{width: '78%'}]}
                            />
                        </View>
                    </View>
                    <Paragraph>We will send a code to this number to verify it's really you.</Paragraph>
                </View>

            </View>


            <View style={styles.bottomactions}>
                <ThemeButton style={styles.signinbtn} text="NEXT" onPress={() => router.push('/codeVerfiy')} />
            </View>

        </SafeAreaView>
    )
}
export default phoneVerfiy;

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
    phoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        alignItems: "center",
        gap: 8
    },
    passwordInput: {
        flex: 1,
        color: "#fff",
        paddingVertical: 16,
        fontSize: 16,
    },
    input: {
        height: 48,
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








});