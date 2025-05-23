import * as SplashScreen from 'expo-splash-screen';
import React, { ReactNode, useEffect, useState } from 'react';
import { Animated, Easing, Image, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

interface SplashScreenProps {
  children: ReactNode;
  customImage?: number;
  backgroundColor?: string;
  logoSize?: { width: number; height: number };
  fadeDuration?: number;
  minimumWaitTime?: number;
}

const CustomSplashScreen: React.FC<SplashScreenProps> = ({
  children,
  customImage,
  backgroundColor = '#ffffff',
  logoSize = { width: 200, height: 200 },
  fadeDuration = 500,
  minimumWaitTime = 2000,
}) => {
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setSplashAnimationComplete] = useState(false);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: fadeDuration,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => setSplashAnimationComplete(true));
    }
  }, [isAppReady]);

  useEffect(() => {
    if (isSplashAnimationComplete) {
      SplashScreen.hideAsync();
    }
  }, [isSplashAnimationComplete]);

  const onLayoutRootView = async () => {
    try {
      const startTime = Date.now();
      const elapsed = Date.now() - startTime;
      const remainingWait = Math.max(0, minimumWaitTime - elapsed);
      if (remainingWait > 0) {
        await new Promise(resolve => setTimeout(resolve, remainingWait));
      }

      setAppReady(true);
    } catch (e) {
      console.warn(e);
      setAppReady(true);
    }
  };

  if (!isSplashAnimationComplete) {
    return (
      <Animated.View
        style={[styles.container, { backgroundColor, opacity: fadeAnim }]}
        onLayout={onLayoutRootView}
      >
        {customImage && (
          <Image
            source={customImage}
            style={[styles.logo, { width: logoSize.width, height: logoSize.height }]}
            resizeMode="contain"
          />
        )}
      </Animated.View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
});

export default CustomSplashScreen;
