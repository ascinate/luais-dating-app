// import { useColorScheme } from '@/hooks/use-color-scheme';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Video } from 'expo-av';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import { Dimensions, StyleSheet, View } from 'react-native';
// import 'react-native-reanimated';

// const { height } = Dimensions.get("window");
// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [splashScreen, setSplashScreen] = useState(true);


//   useEffect(() => {
//     setTimeout(() => {
//       setSplashScreen(false);
//     }, 100);

//     return () => {
//       setSplashScreen(true);
//     };

//   }, []);

//   if (splashScreen) {
//     return (
//       <View style={styles.vdDivs}>
//         <Video
//           source={require('../assets/video/introvg.mp4')}
//           style={styles.video}
//           resizeMode='cover'
//           shouldPlay
//           isLooping
//           isMuted
//         />
//       </View>
//     );
//   }
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack screenOptions={{ headerShown: false }} />
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

// const styles = StyleSheet.create({
//   video: {
//     height: "100%",
//     width: "100%",
//     objectFit: "cover",
//     padding: 0,
//   },
//   vdDivs: {
//     minHeight: height,
//     flex: 1,
//     width: "100%",
//     padding: 0,
//     margin: 0,
//   },
//   containerFull: {
//     minHeight: height,
//     flex: 1,
//     width: "100%",
//     padding: 0,
//     margin: 0,
//   },
// });




