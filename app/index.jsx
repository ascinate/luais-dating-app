


import RadialBackground from '@/components/ui/RadialBackground';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';

// components
import CustomText from '@/components/ui/CustomText';
import H1 from '@/components/ui/H1';
import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';

const { height } = Dimensions.get("window");

export default function LandingTwo() {
  return (
    <View style={styles.safeArea}>
      <RadialBackground
      >
        <View style={styles.vdDivs}>
          <Video
            source={require('../assets/video/videos-main.mp4')}
            style={styles.video}
            resizeMode="cover"
            shouldPlay
            isLooping
            isMuted
          />
        </View>
      </RadialBackground>
      <LinearGradient
        colors={['rgba(0,0,0,0.15)', 'rgba(0,0,0,1)']}
        locations={[0, 0.90]}
        start={{ x: 0.5, y: 0.1 }}
        end={{ x: 0.5, y: 0.4 }}
        style={styles.container}
      >
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
          <H1>
            SWIPE LESS,{'\n'}
            MATCHING RIGHT
          </H1>
          <CustomText style={{ fontSize: 16, backgroundColor: '#423A32', height: 35, borderWidth: 1, borderColor: "#FB5883", borderRadius: 25, lineHeight: 35, width: 60, textAlign: "center", color: '#FB5883', }}> 18+ </CustomText>
        </View>


        <Paragraph style={styles.paragraph}>
          A better way to meet the right people.
        </Paragraph>

        <ThemeButton text="LET'S GO" onPress={() => router.push('/editprofile')} />
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    padding: 0,
  },

  video: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    padding: 0,
  },
  vdDivs: {
    minHeight: height,
    flex: 1,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  containerFull: {
    minHeight: height,
    flex: 1,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  gradient: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    width: "100%",
    height: "300px",
  },
  container: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 50,
    width: "100%",
  },
  overView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    minHeight: height,
    flex: 1,
    padding: 0,
  },
  paragraph: {
    color: 'white',
    marginTop: 10,
    marginBottom: 15,
  },
});