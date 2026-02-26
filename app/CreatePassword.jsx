import H1 from '@/components/ui/H1';
import Labeltext from '@/components/ui/Labeltext';
import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height } = Dimensions.get("window");



const CreatePassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

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


                <H1>CREATE NEW PASSWORD</H1>
                <Paragraph>Your new password must be different from previously used password</Paragraph>

            </View>

            <View style={styles.comoninputs}>
                <Labeltext style={styles.label}>New Password</Labeltext>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="••••••••"
                        placeholderTextColor="#888"
                        secureTextEntry={!passwordVisible}
                        style={styles.passwordInput}
                    />

                    <TouchableOpacity
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Ionicons
                            name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                            size={22}
                            color="#aaa"
                        />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.comoninputs}>
                <Labeltext style={styles.label}>Confirm Password</Labeltext>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="••••••••"
                        placeholderTextColor="#888"
                        secureTextEntry={!passwordVisible}
                        style={styles.passwordInput}
                    />

                    <TouchableOpacity
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Ionicons
                            name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                            size={22}
                            color="#aaa"
                        />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.bottomactions}>
                <ThemeButton
                    style={styles.signinbtn}
                    text="UPDATE PASSWORD"
                    onPress={() => setModalVisible(true)}
                />
            </View>

            <Modal
                transparent
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Image source={require('../assets/images/checklist01.gif')} style={styles.gifanmaticons} />

                        <H1 style={styles.modalTitle}>PASSWORD UPDATED </H1>
                        <Paragraph style={styles.modalSub}>
                            Your password has been updated successfully
                        </Paragraph>


                        <TouchableOpacity
                            style={styles.doneBtn}
               onPress={() => {
  setModalVisible(false);
  router.push('/home');
}}

                         
                        >
                            <LinearGradient
                                colors={['#F65D8F', '#633DE2']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1.6, y: 0 }}
                                style={styles.doneBtnnext}

                            >
                                <Paragraph style={styles.doneText}>DONE</Paragraph> 
                                </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>



        </SafeAreaView>
    )
}
export default CreatePassword;

const styles = StyleSheet.create({
    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        width: "100%",
        paddingRight: 12,
        paddingLeft: 12,

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
    label: {
        marginBottom: 6,
    },
    topsctions: {
        backgroundColor: '#000',
        padding: 2,
        marginBottom: 20,
    },
    bottomactions: {
        backgroundColor: '#000',
        padding: 2,
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

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,

        borderRadius: 12,
    },

    modalContainer: {
        width: "85%",
        backgroundColor: "#000",
        padding: 25,
        paddingTop: 65,
        paddingBottom: 20,
        borderRadius: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#4b4b4bff",
    },

    modalTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

    modalSub: {
        color: "#aaa",
        textAlign: "center",
        marginBottom: 25,
    },

    gifanmaticons: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    doneBtn: {
        width: "100%",
        padding: 0,
        borderRadius: 12,
        alignItems: "center",
    },
    doneBtnnext: {
        width: "100%",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },

    doneText: {
        color: "#fff",
        fontSize: 16
    },


});