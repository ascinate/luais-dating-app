import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import "../../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
// component
import CustomText from '@/components/ui/CustomText';
import ThemeButton from '@/components/ui/ThemeButton';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      {/* Background Video */}
      <Video
        source={require('../../assets/video/landing.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />

      {/* Dark overlay (optional, makes text readable) */}
      <View style={styles.overlay} />
      {/* Content */}
      <View className="flex-1" style={styles.container}>
        <CustomText weight="regular" style={{ fontSize: 34, color: 'white', }}>
          SWIPE LESS,
        </CustomText >
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <CustomText weight="regular" style={{ fontSize: 34, color: 'white', marginRight: 10 }}>
            MATCHING RIGHT
          </CustomText>
          <View style={styles.eighteen}>
            <CustomText weight="regular" style={{ fontSize: 24, color: '#ff5f8a', }}>
              18+
            </CustomText>
          </View>

        </View>
        <CustomText weight="regular" style={{ fontSize: 14, color: 'white', marginTop: 10, marginBottom: 20 }}>
          A better way to meet the right people.
        </CustomText>
        <ThemeButton />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  eighteen: {
    backgroundColor: '#40372B', borderWidth: 2, borderColor: '#ff5f8a', borderRadius: 25, paddingHorizontal: 12, paddingVertical: 0, alignContent: 'center', justifyContent: 'center'
  }
});