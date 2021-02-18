import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginContextProvider from './context/LoginContextProvider';

import Home from './screens/Home';
import Songtekst from './screens/Songtekst';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LoginContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name="Songtekst pagina" component={Songtekst} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContextProvider>
  );
}

const styles = StyleSheet.create({
  
});
