import H1 from '@/components/ui/H1';
import Labeltext from '@/components/ui/Labeltext';
import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height } = Dimensions.get("window");


const signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <SafeAreaView style={styles.fullsignup}>

      <View style={styles.topsctions}>
        <Image source={require('../assets/images/logo-louis.png')} style={styles.logo} />
        <H1>WELCOME BACK</H1>
        <Paragraph>Login to your account to continue</Paragraph>
        <Text>signup</Text>
      </View>
      <View style={styles.comoninputs}>
        <Labeltext style={styles.label}>Email Or Phone Number</Labeltext>
        <TextInput
          placeholder="e.g. noah@gmail.com"
          placeholderTextColor="#888"
          style={styles.input}
        />

      </View>
      <View style={styles.comoninputs}>
        <Labeltext style={styles.label}>Password</Labeltext>
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
        <View>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={styles.forgotBtn}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.bottomactions}>
        <ThemeButton style={styles.signinbtn} text="SIGN IN" onPress={() => router.push('/phoneVerfiy')} />
      </View>
      <View style={styles.container}>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="google" size={20} color="#DB4437" />
            <Text style={styles.socialText}> Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="facebook" size={20} color="#1877F2" />
            <Text style={styles.socialText}> Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerRow}>
          <Text style={styles.grayText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          By continuing with any of these, you agree to our{" "}
          <Text style={styles.link}>Terms & Conditions</Text>
        </Text>

      </View>
    </SafeAreaView>
  )
}
export default signup;

const styles = StyleSheet.create({
  fullsignup: {
    flex: 1,
    backgroundColor: '#000',
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12,

  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: "center",
  },
  label: {
    marginBottom: 6,
  },
  topsctions: {
    backgroundColor: '#000',
    padding: 2,
  },
  bottomactions: {
    backgroundColor: '#000',
    padding: 2,
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


});