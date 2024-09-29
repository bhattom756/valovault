import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { Provider } from './Provider'; // Tamagui Provider
import * as NavigationBar from 'expo-navigation-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase'; // Firebase config

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

const AuthenticatedUserContext = createContext(null);

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <Provider>
      <AuthenticatedUserProvider>
        <RootLayoutNav />
      </AuthenticatedUserProvider>
    </Provider>
  );
}

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function RootLayoutNav() {
  const { user } = useContext(AuthenticatedUserContext); // Get user from context
  const colorScheme = useColorScheme();

  NavigationBar.setPositionAsync('absolute');
  NavigationBar.setBackgroundColorAsync('#ffffff01');

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: '#161626' },
        }}
      >
        {/* {!user ? (
          <> */}
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)"
              options={{ headerShown: false }}
            />
          {/* </>
        ) : ( */}
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />
        {/* )} */}
      </Stack>
    </ThemeProvider>
  );
}
