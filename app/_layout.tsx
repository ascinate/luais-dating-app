import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useFonts } from 'expo-font';
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
const [fontsLoaded] = useFonts({
    'Inter-Thin': require('../assets/fonts/Inter_18pt-Thin.ttf'),
    'Inter-ThinItalic': require('../assets/fonts/Inter_18pt-ThinItalic.ttf'),

    'Inter-ExtraLight': require('../assets/fonts/Inter_18pt-ExtraLight.ttf'),
    'Inter-ExtraLightItalic': require('../assets/fonts/Inter_18pt-ExtraLightItalic.ttf'),

    'Inter-Light': require('../assets/fonts/Inter_18pt-Light.ttf'),
    'Inter-LightItalic': require('../assets/fonts/Inter_18pt-LightItalic.ttf'),

    'Inter-Regular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-Italic': require('../assets/fonts/Inter_18pt-Italic.ttf'),

    'Inter-Medium': require('../assets/fonts/Inter_18pt-Medium.ttf'),
    'Inter-MediumItalic': require('../assets/fonts/Inter_18pt-MediumItalic.ttf'),

    'Inter-SemiBold': require('../assets/fonts/Inter_18pt-SemiBold.ttf'),
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter_18pt-SemiBoldItalic.ttf'),

    'Inter-Bold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
    'Inter-BoldItalic': require('../assets/fonts/Inter_18pt-BoldItalic.ttf'),

    'Inter-ExtraBold': require('../assets/fonts/Inter_18pt-ExtraBold.ttf'),
    'Inter-ExtraBoldItalic': require('../assets/fonts/Inter_18pt-ExtraBoldItalic.ttf'),

    'Inter-Black': require('../assets/fonts/Inter_18pt-Black.ttf'),
    'Inter-BlackItalic': require('../assets/fonts/Inter_18pt-BlackItalic.ttf'),
  });
   if (!fontsLoaded) return null;
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
