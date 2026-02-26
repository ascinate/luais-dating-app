import H1 from "@/components/ui/H1";
import ThemeButton from "@/components/ui/ThemeButton";
import { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { router } from 'expo-router';
const { width } = Dimensions.get("window");

export default function Success() {
  const [confettiKey, setConfettiKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setConfettiKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.fullsignup}>
      <View style={styles.container}>
        <ConfettiCannon
          key={confettiKey}
          count={120}
          origin={{ x: width / 2, y: 0 }}
          fadeOut
        />

        <Image source={require('../assets/images/logo-louis.png')} style={styles.logo} />
        <H1 style={styles.text}>YOU'RE IN</H1>
      </View>
      <View style={styles.bottomactions}>

        <ThemeButton style={styles.signinbtn} text="MATCH ME RIGHT NOW" onPress={() => router.push('/home')} />

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
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 18,
  },
});