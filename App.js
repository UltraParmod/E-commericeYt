

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplaceScreen from './src/screens/splash';
// import Sigin from './src/screens/sigin';
// import SignUp from './src/screens/signUp';
// import Welcome from './src/screens/welcome';

// function SplaceCall() {return  <SplaceScreen />}
// function SignInCall() {return  <Sigin />}
// function SignUpCall() {return  <SignUp />}
// function WelcomeCall() {return  <Welcome />}




// const RootStack = createNativeStackNavigator({
//   initialRouteName: 'SplashCall',
//   screens: {
//     SplashCall:{
//       screen: SplaceCall,
//       options: {
//         title: 'Splash Screen',
//         headerShown:false
//       },
//     },  
//     SignInCall:{
//       screen: SignInCall,
//       options: {
//         title: 'Sign In',
//         headerShown:false
//       },
//     }, 
//     SignUpCall:{
//       screen: SignUpCall,
//       options: {
//         title: 'SignUp Call',
//         headerShown:false
//       },
//     }, 
//     WelcomeCall:{
//       screen: WelcomeCall,
//       options: {
//         title: 'WelcomeCall',
//         headerShown:false
//       },
//     },  
//   },
//   screenOptions: {
//     headerShown: true,
//   },
// });

// const Navigation = createStaticNavigation(RootStack);

// export default function App() {
//   return <Navigation />;
// }
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import SplaceScreen from './src/screens/splash';
import Sigin from './src/screens/sigin';
import SignUp from './src/screens/signUp';
import Welcome from './src/screens/welcome';
import { LogBox } from 'react-native';
import CustomeDrawerContent from './src/screens/SideNavigation/CustomeDrawerContent';
import SideNavigation from './src/screens/SideNavigation';
import  messaging  from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';


const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();
export default function App() {
  useEffect(()=>{
    pushNotifaction()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      onDisplayNotification()
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    return unsubscribe;
  },[])
  async function pushNotifaction(params) {
      let fcmToken=await messaging().getToken()
    if(fcmToken){
      console.log('Token Crated',fcmToken)
    }
  }
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashCall" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashCall" component={SplaceScreen} />
        <Stack.Screen name="SignInCall" component={Sigin} />
        <Stack.Screen name="SignUpCall" component={SignUp} />
        <Stack.Screen name="SideNavigation" component={SideNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
