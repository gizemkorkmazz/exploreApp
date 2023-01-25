import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from 'Constants/ScreenNames';
import React from 'react';
import Home from 'Screens/Home';

const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ScreenNames.HOME}
        component={Home}
        navigation={navigation}
      />
  
    </Stack.Navigator>
  );
};
export default AppNavigator;
