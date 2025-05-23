import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import CustomSplashScreen from '../components/SplashScreen';

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <CustomSplashScreen
      customImage={require('../assets/images/splash-icon.png')}
      backgroundColor="#ffffff"
      logoSize={{ width: 200, height: 200 }}
      fadeDuration={800}
      minimumWaitTime={1500}
    >
      <>
        <StatusBar style="light" />
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" options={{}} />
        </Stack>
      </>
    </CustomSplashScreen>
  );
}
