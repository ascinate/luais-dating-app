import H1 from "@/components/ui/H1";
import Labeltext from "@/components/ui/Labeltext";
import Paragraph from "@/components/ui/Paragraph";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from 'react-native-paper';
import WheelPicker from "react-native-wheel-scrollview-picker";


export default function UserRegisterData() {
    const [step, setStep] = useState(1);
    const [checked, setChecked] = useState(false);
    const months = [
        "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
    const years = Array.from({ length: 50 }, (_, i) => (1975 + i).toString());

    const [monthIndex, setMonthIndex] = useState(0);
    const [dayIndex, setDayIndex] = useState(0);
    const [yearIndex, setYearIndex] = useState(25);
    const [selectedGender, setSelectedGender] = useState("MAN");
    const [matchGender, setMatchGender] = useState("WOMEN");
    const options = ["MAN", "WOMEN", "NON-BINARY"];

    const RenderGroup = ({ title, value, setValue }) => (
        <View style={{ marginBottom: 25, marginTop: 10 }}>
            <Text style={styles.label}>{title}</Text>

            <View style={styles.row}>
                {options.map((item) => {
                    const isSelected = value === item;

                    return (
                        <TouchableOpacity
                            key={item}
                            onPress={() => setValue(item)}
                            style={[
                                styles.option,
                                isSelected && styles.selectedOption,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.optionText,
                                    isSelected && styles.selectedText,
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );


    const nextStep = () => {
        if (step < 2) {
            setStep(step + 1);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: "row", width: "100%", textAlign: "center", marginTop: 20, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Image source={require('../assets/images/backpng.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Image source={require('../assets/images/logo-louis.png')} style={styles.logo} />
            </View>

            {/* Progress */}
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${step * 33}%` }]} />
            </View>

            {/* STEP CONTENT */}
            {step === 1 && (
                <View style={styles.stepContent}>
                    <H1>TELL US YOUR NAME</H1>
                    <Paragraph style={{ marginTop: 10, color: "#ABABAB", }}>Just first name is cool.</Paragraph>
                    <View style={styles.comoninputs}>
                        <Labeltext style={styles.label}>Email Or Phone Number</Labeltext>
                        <TextInput
                            placeholder="e.g. noah@gmail.com"
                            placeholderTextColor="#888"
                            style={styles.input}
                        />
                    </View>
                    <Paragraph style={{ color: "#ABABAB", marginTop: 10 }}> You can change this later </Paragraph>
                </View>
            )}

            {step === 2 && (
                <View>
                    <H1 style={styles.title}>HOW OLD ARE YOU?</H1>
                    <Paragraph style={{ marginTop: 10, marginBottom: 20 }}>Just first name is cool.</Paragraph>
                    <View style={styles.pickerWrapper}>
                        <View style={styles.pickerRow}>
                            <WheelPicker
                                dataSource={months}
                                selectedIndex={monthIndex}
                                onValueChange={(data, index) => setMonthIndex(index)}
                                wrapperHeight={180}
                                wrapperWidth={120}
                                itemHeight={50}
                                highlightColor="#F3DEB1"
                                highlightBorderWidth={1}
                                itemTextStyle={styles.itemText}
                                activeItemTextStyle={styles.activeText}
                            />
                            <WheelPicker
                                dataSource={days}
                                selectedIndex={dayIndex}
                                onValueChange={(data, index) => setDayIndex(index)}
                                wrapperHeight={180}
                                wrapperWidth={60}
                                itemHeight={50}
                                highlightColor="#F3DEB1"
                                highlightBorderWidth={1}
                                itemTextStyle={styles.itemText}
                                activeItemTextStyle={styles.activeText}
                            />
                            <WheelPicker
                                dataSource={years}
                                selectedIndex={yearIndex}
                                onValueChange={(data, index) => setYearIndex(index)}
                                wrapperHeight={180}
                                wrapperWidth={90}
                                itemHeight={50}
                                highlightColor="#F3DEB1"
                                highlightBorderWidth={1}
                                itemTextStyle={styles.itemText}
                                activeItemTextStyle={styles.activeText}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!checked)}
                        />
                        <Paragraph style={{ color: "#ABABAB" }}> Don't show anyone </Paragraph>
                    </View>
                </View>
            )}

            {step === 3 && (
                <View>
                    <Text style={styles.title}>HOW OLD ARE YOU?</Text>

                    <RenderGroup
                        title="I am a..."
                        value={selectedGender}
                        setValue={setSelectedGender}
                        styles={{ marginVertical: 10 }}
                    />

                    <RenderGroup
                        title="Match me with a..."
                        value={matchGender}
                        setValue={setMatchGender}
                    />
                    <Paragraph style={{ color: "#ABABAB", marginTop: 10, textAlign: "center" }}> You can change this later </Paragraph>
                </View>
            )}



            {/* NEXT BUTTON */}
            {step < 4 && (
                <TouchableOpacity onPress={nextStep} style={styles.nextWrapper}>
                    <LinearGradient
                        colors={["#ff5f8f", "#7b5cff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.nextBtn}
                    >
                        <Paragraph style={styles.nextText}>NEXT</Paragraph>
                    </LinearGradient>
                </TouchableOpacity>
            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 12,
        justifyContent: "space-between",
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
    progressBar: {
        height: 4,
        backgroundColor: "#222",
        borderRadius: 10,
        marginTop: 0,
    },

    progressFill: {
        height: "100%",
        backgroundColor: "#F3DEB1",
        borderRadius: 10,
    },

    title: {
        color: "#fff",
        fontSize: 20,
        marginTop: 40,
    },

    nextWrapper: {
        marginBottom: 30,
    },

    nextBtn: {
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },

    nextText: {
        color: "#fff",
    },
    stepContent: {
        alignItems: "start",
        width: "100%",
    },
    comoninputs: {
        backgroundColor: '#000',
        padding: 2,
        width: "100%",
        marginBottom: 0,
        marginTop: 30,
    },
    input: {
        backgroundColor: "#000",
        borderRadius: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#333",
        color: "#000",
        paddingVertical: 5,
        height: 48,
        fontSize: 14,
    },
    label: {
        marginBottom: 6,
    },
    pickerRow: {
        flexDirection: "row",
        marginTop: 30,
        backgroundColor: '#000',
    },

    itemText: {
        color: "#555",
        fontSize: 16,
    },

    activeText: {
        color: "#F3DEB1",
        fontSize: 18,
        fontWeight: "bold",

    },
    pickerWrapper: {
        backgroundColor: "#0f0f14",
        borderRadius: 20,
    },
    option: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
        alignItems: "center",
        marginHorizontal: 5,
    },

    selectedOption: {
        borderColor: "#F3DEB1",
        backgroundColor: "rgba(243,222,177,0.08)",
    },

    optionText: {
        color: "#aaa",
        fontSize: 14,
    },
    selectedText: {
        color: "#F3DEB1",
        fontWeight: "600",
    },
    label: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 15,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

});