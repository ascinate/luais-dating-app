import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import CustomText from '@/components/ui/CustomText';
import H1 from '@/components/ui/H1';
import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';

export default function LandingTwo() {
  return (
    <SafeAreaView style={styles.safeArea}>

      <Video
        source={require('../assets/video/landing.mp4')}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />


      <LinearGradient
        colors={['rgba(0, 0, 0, 0.29)', 'rgba(0,0,0,0.95)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
      >
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
          <H1>
            subrata,{'\n'}
            MATCHING RIGHTt
          </H1>
          <CustomText weight="regular" style={{ fontSize: 24, color: '#ff5f8a', }}> 18+ </CustomText>
        </View>


        <Paragraph style={styles.paragraph}>
          A better way to meet the right people.
        </Paragraph>

        <ThemeButton onPress={() => router.push('/signup')} />
      </LinearGradient>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },

  video: {
    flex: 1,
  },

  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    width: "100%",
    height: "300px",
  },

  container: {
    position: 'absolute',
    bottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    width: "100%",
  },

  paragraph: {
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
});