import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import ColorTheme from './src/Helpers/ColorTheme';
import Icons from 'Helpers/Icons';
import { wp } from 'Helpers/Responsive';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenNames from './src/Constants/ScreenNames';
import AppNavigator from './src/Navigations/App';
import Profile from './src/Screens/Profile';

const MyTabBar =({ state, descriptors, navigation }) =>{
  return (
    <View style={styles.direction}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          // Burada emit() fonksiyonunun amaci eventi tetikleyip senkronize olarak route.key e ulasmak.
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.container}
            key={index}
          >
            <Image source={label=="HOME"?Icons.Home:Icons.About} style={[styles.image,{tintColor:isFocused?ColorTheme.App.Secondary:ColorTheme.App.Third}]}>
            </Image>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createBottomTabNavigator();

const App=() => {

  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: ColorTheme.App.Primary} }>
        <StatusBar backgroundColor={ColorTheme.App.Primary} barStyle="light-content" />
      </SafeAreaView>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown:false,
      }}
      >
        <Tab.Screen name={ScreenNames.HOME} component={AppNavigator}  />
        <Tab.Screen name={ScreenNames.PROFILE} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTheme.App.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    height:wp(22),
    borderTopWidth:1,
    borderTopColor:ColorTheme.App.Secondary,
  },
  image:{
    width:wp(8),
    height:wp(8),
    resizeMode:"contain",
    marginBottom:wp(2),
  },
  direction:{ flexDirection: 'row' }
});

export default App;
