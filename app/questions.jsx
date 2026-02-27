import H1 from "@/components/ui/H1";
import StepsEight from "@/components/ui/StepsEight";
import StepsEleven from "@/components/ui/StepsEleven";
import StepsFive from "@/components/ui/StepsFive";
import StepsFour from "@/components/ui/StepsFour";
import StepsNine from "@/components/ui/StepsNine";
import StepsOne from "@/components/ui/StepsOne";
import StepsSeven from "@/components/ui/StepsSeven";
import StepsSix from "@/components/ui/StepsSix";
import StepsTen from "@/components/ui/StepsTen";
import StepsThirteen from "@/components/ui/StepsThirteen";
import StepsThree from "@/components/ui/StepsThree";
import StepsTwelve from "@/components/ui/StepsTwelve";
import StepsTwo from "@/components/ui/StepsTwo";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Paragraph } from "react-native-paper";
const { height } = Dimensions.get("window");




export default function questions() {
    const totalSteps = 5;
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step === 1) {
            router.back();
        } else {
            setStep(step - 1);
        }
    };


    const progressAnim = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: step / totalSteps,
            duration: 400,
            useNativeDriver: false,
        }).start();
    }, [step]);

    return (
        <SafeAreaView style={styles.fullsignup}>

            <View style={{ width: "100%", height: 70, backgroundColor: "#000", justifyContent: "center", alignItems: "center", top: 0, left: 0, right: 0, }}>
                <View style={styles.headerContainer}>

                    {/* LEFT */}
                    <TouchableOpacity onPress={prevStep} style={styles.sideBtn}>
                        <Image
                            source={require("../assets/images/backpng.png")}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>

                    {/* CENTER */}
                    <View style={styles.centerWrapper}>
                        <Image
                            source={require("../assets/images/logo-louis.png")}
                            style={styles.logo}
                        />

                    </View>

                    {/* RIGHT */}
                    <TouchableOpacity onPress={nextStep} style={styles.sideBtn}>
                        <Text style={styles.skipText}>
                            {step === totalSteps - 1 ? "CONTINUE" : "SKIP"}
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* Animated Progress */}
                <View style={styles.progressBar}>
                    <Animated.View
                        style={[
                            styles.progressFill,
                            {
                                width: progressAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"],
                                }),
                            },
                        ]}
                    />
                </View>




            </View>

            {/* 🔥 Progress */}
            <View style={styles.progressBar}>
                <View
                    style={[
                        styles.progressFill,
                        { width: `${(step / totalSteps) * 100}%` },
                    ]}
                />
            </View>

            <View style={{ flexDirection: "row", marginTop: 15, alignItems: "center", justifyContent: "flex-start", marginTop: 10 }}>
                <Text style={styles.questionText}>
                    Question  {step}
                </Text>
                <Text style={styles.stepText}>
                    / {totalSteps}
                </Text>
            </View>


            {/* STEP CONTENT */}
            {step === 1 && (
                <View style={styles.stepContent}>
                    <H1 style={styles.title}>TELL US YOUR NAME</H1>
                    <StepsOne />
                </View>
            )}

            {step === 2 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}>How do you usually approach dating?</Text>
                    <StepsTwo />
                </View>
            )}

            {step === 3 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}>What's your travel
                        personality?</Text>
                    <StepsThree />
                </View>
            )}

            {step === 4 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}>The vibe you bring on
                        a night out:</Text>
                    <StepsFour />
                </View>
            )}

            {step === 5 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}>Your go-to drink
                        of choice:</Text>
                    <StepsFive />
                </View>
            )}

            {step === 6 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> What’s most important
                        in a connection?</Text>
                    <StepsSix />
                </View>
            )}

            {step === 7 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> Pick a soundtrack for
                        a memorable night:</Text>
                    <StepsSeven />
                </View>
            )}

            {step === 8 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> If you could describe
                        yourself in one word:</Text>
                    <StepsEight />
                </View>
            )}

            {step === 9 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> What’s your dating
                        energy? </Text>
                    <Paragraph>
                        Choose what best describes your vibe in love:
                    </Paragraph>
                    <StepsNine />
                </View>
            )}

            {step === 10 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> Ideal escape with
                        someone you like: </Text>

                    <StepsTen />
                </View>
            )}

            {step === 11 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> How do you show
                        interest? </Text>

                    <StepsEleven />
                </View>
            )}

            {step === 12 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> How would you describe
                        your “luxury dating
                        energy”? </Text>

                    <StepsTwelve />
                </View>
            )}

            {step === 13 && (
                <View style={styles.stepContent}>
                    <Text style={styles.title}> Which statement feels
                        most like you?</Text>

                    <StepsThirteen />
                </View>
            )}




            {/* NEXT BUTTON */}
            {step < totalSteps && (
                <TouchableOpacity onPress={nextStep} style={styles.nextWrapper}>
                    <LinearGradient
                        colors={["#ff5f8f", "#7b5cff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.nextBtn}
                    >
                        <Text style={styles.nextText}>
                            {step === totalSteps - 1 ? "CONTINUE" : "NEXT"}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 18,
    },
    nextWrapper: {
        width: "100%",
        position: "absolute",
        bottom: 80,
        left: 0,
        right: 0,
    },
    nextText: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 15,
    },
    nextBtn: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 15,
    },
    sideBtn: {
        width: 70,
        alignItems: "center",
    },

    centerWrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
    },
    questionText: {
        color: "#F3DEB1",
        fontSize: 13,
    },
    stepText: {
        color: "#aaa",
        fontSize: 13,
        marginTop: 4,
    },
    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        width: "100%",
        paddingRight: 2,
        paddingTop: 20,

    },
    topsctions: {
        width: "100%",
        height: 70,
        backgroundColor: "#000",
        justifyContent: "space-between",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
    },
    skipText: {
        color: "#fff",
        fontSize: 14,
    },
    stepContent: {
        marginTop: 20,
        color: "#fff",
    },
    title: {
        fontSize: 24,
        color: "#fff",
        marginTop: 20,
        textTransform: "uppercase",
    },
    stepText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    stepText: {
        color: "#aaa",
        fontSize: 14,
    },

    progressBar: {
        height: 4,
        backgroundColor: "#222",
        borderRadius: 10,
        marginTop: 30,
    },

    progressFill: {
        height: "100%",
        backgroundColor: "#F3DEB1",
        borderRadius: 10,
    },



});