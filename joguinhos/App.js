import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Bingo from './Screens/Bingo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{headerTitle:"poggers"}} />
        <Stack.Screen name="bingo" component={Bingo} options={{headerTitle:"BINGO"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
