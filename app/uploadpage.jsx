import H1 from "@/components/ui/H1";
import Paragraph from "@/components/ui/Paragraph";
import ThemeButton from "@/components/ui/ThemeButton";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const { width } = Dimensions.get("window");

export default function Success() {
    const [confettiKey, setConfettiKey] = useState(0);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) return;

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            fakeUpload(); // simulate upload
        }
    };

    const fakeUpload = () => {
        setUploading(true);
        setProgress(0);

        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setConfettiKey((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
            </View>
            <View style={styles.container}>
                <H1 style={{ marginTop: 70 }}>ALL SET TO MATCH</H1>
                <Paragraph style={styles.text}> Just need a photo of you </Paragraph>
                <View style={styles.mainContainer}>
                    <TouchableOpacity onPress={pickImage} activeOpacity={0.8} style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.avatarContainer}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.avatar} />
                            ) : (
                                <View style={styles.placeholder}>
                                    <Text style={styles.chooseText}>Choose{'\n'}Photo</Text>
                                </View>
                            )}


                        </View>
                        {uploading && (
                            <View style={styles.progressOverlay}>
                                <LinearGradient
                                    colors={["#F65D8F", "#633DE2"]}
                                    style={[styles.progressBar, { width: `${progress}%` }]}
                                />
                            </View>
                        )}
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.bottomactions}>

                <ThemeButton style={styles.signinbtn} text="USE THIS PHOTO" onPress={() => router.push('/ChoosePlan')} />
                <TouchableOpacity style={{ marginTop: 0 }} onPress={() => router.push('/ChoosePlan')}>
                    <Paragraph style={styles.text}>SKIP FOR NOW</Paragraph>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        width: "100%",
        paddingLeft: 12,
        paddingRight: 12,

    },
    container: {
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "start",
        marginTop: 8,
    },
    signinbtn: {
        textTransform: "uppercase",
        justifyContent: "center",
        alignItems: "center",
        width: "98%",
    },
    bottomactions: {
        backgroundColor: '#000',
        position: "absolute",
        bottom: 40,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        fontSize: 28,
        color: "#F3DEB1",
        fontWeight: "bold",
    },

    text: {
        fontSize: 18,
        color: "#fff",
        marginTop: 0,
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
    avatarContainer: {
        width: 130,
        height: 130,
        borderRadius: 65,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
    },
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 120,
    },
    avatar: {
        width: "100%",
        height: "130%",
        objectFit: "cover",
    },
    placeholder: {
        justifyContent: "center",
        alignItems: "center",
    },
    chooseText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
    },
    progressOverlay: {
        position: "absolute",
        bottom: -20,
        width: "100%",
        height: 6,
        backgroundColor: "#333",
        left: 0,
        right: 0,
    },
    progressBar: {
        height: "100%",
        width: "100%",
    },
    topsctions: {
        backgroundColor: '#000',
        padding: 2,
    },

});