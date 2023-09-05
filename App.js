import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import UserProfile from './src/screens/app/botomTabs/userProfile';
import UserReels from './src/screens/app/botomTabs/userReels';
import UserSavedItems from './src/screens/app/botomTabs/userSavedItems';
import InstaProfile from './src/screens/app/profile';
import UserAppSplash from './src/screens/app/splash';

//Initializing Stack Navigator
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

//Tabs Navigation that includes profile data 
function BottomTabs() {
  return (
    <>
      <InstaProfile />
      <Tab.Navigator
        initialRouteName='Profile'
      >
        <Tab.Screen name="Profile" component={UserProfile} />
        <Tab.Screen name="Reels" component={UserReels} />
        <Tab.Screen name="Saved Items" component={UserSavedItems} />

      </Tab.Navigator>
    </>

  )
}

function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='UserAppSplash'
        >
          <Stack.Screen name="UserAppSplash" component={UserAppSplash} />
          <Stack.Screen name="InstaProfile" component={BottomTabs} />

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
export default App;