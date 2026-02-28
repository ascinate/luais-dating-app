import CustomText from '@/components/ui/CustomText';
import H1 from '@/components/ui/H1';
import Paragraph from '@/components/ui/Paragraph';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height } = Dimensions.get("window");


const ChoosePlan = () => {
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


                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, }}
                    showsVerticalScrollIndicator={false}
                >
                    <H1>LET'S GET THIS RIGHT.</H1>
                    <Paragraph>Answer a few questions so we can match you with people who actually fit you.</Paragraph>
                    <View style={styles.comonpalns}>
                        <View style={{ marginTp: -10, marginLeft: "auto", zIndex: 2, paddingHorizontal: 30, paddingVertical: 15, borderRadius: 50, backgroundColor: "#F3DEB1", color: "#151515", width: 100, height: 20 }}>
                            <Text style={{
                                color: "#151515",
                                fontSize: 12,
                            }}>Recommended</Text>
                        </View>
                        <View style={styles.planCard}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <Image source={require('../assets/images/starticon.png')} style={styles.checkIcon} />
                                <Text style={{ color: "#fff", textTransform: "uppercase", fontSize: 16 }}>Personalize My Matches</Text>
                            </View>
                            <Paragraph style={{ color: "#fff", marginTop: 10, fontSize: 12 }}>Answer 15 quick questions and get more accurate, meaningful matches.</Paragraph>
                            <TouchableOpacity
                                onPress={() => router.push("/home")}
                                style={styles.btnplans}
                            ><LinearGradient
                                colors={['#F65D8F', '#633DE2']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1.6, y: 0 }}
                                style={styles.continueBtn}
                            ><CustomText style={{ color: "#fff", fontWeight: '600' }}> CALL ME INSTEAD </CustomText></LinearGradient></TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.comonpalns}>
                        <View style={styles.planCard}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <Image source={require('../assets/images/lights015.png')} style={styles.checkIcon} />
                                <Text style={{ color: "#fff", textTransform: "uppercase", fontSize: 16 }}>JUMP RIGHT IN</Text>
                            </View>
                            <Paragraph style={{ color: "#fff", marginTop: 10, fontSize: 12 }}> You can always complete your profile later. </Paragraph>
                            <TouchableOpacity
                                onPress={() => router.push("/home")}
                                style={styles.btnplans}
                            ><LinearGradient
                                colors={['#F65D8F', '#633DE2']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1.6, y: 0 }}
                                style={styles.continueBtn}
                            ><CustomText style={{ color: "#fff", fontWeight: '600' }}> CONTINUE TO APP </CustomText></LinearGradient></TouchableOpacity>
                        </View>
                    </View>

                    <Paragraph style={{ color: "#fff", marginTop: 10, fontSize: 12, width: "100%", textAlign: "center" }}> You're always in control. Update or skip any question anytime. </Paragraph>

                </ScrollView>

            </View>


        </SafeAreaView>
    )
}
export default ChoosePlan;

const styles = StyleSheet.create({
    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,

    },
    checkIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
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
    btnplans: {
        width: "100%",
        marginBottom: 10,
        marginTop: 20,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
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
        height: height,
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
    comonpalns: {
        backgroundColor: '#000',
        padding: 2,
        width: "100%",
        marginBottom: 10,
        marginTop: 20,
    },

    planCard: {
        backgroundColor: '#39352E',
        padding: 12,
        width: "100%",
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#F3DEB1",
        borderRadius: 16,
        height: 175,
        paddingTop: 20,
        marginTop: -10,
        zIndex: 1,
    },
    planCardNext: {
        backgroundColor: '#3B3B3B',
        padding: 12,
        width: "100%",
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#F3DEB1",
        borderRadius: 16,
        height: 175,
        paddingTop: 20,
        marginTop: -10,
        zIndex: 1,
    },
    continueBtn: {
        padding: 12,
        width: "100%",
        marginBottom: 10,
        marginTop: 20,
        color: "#fff",
        borderRadius: 16,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
    },
});