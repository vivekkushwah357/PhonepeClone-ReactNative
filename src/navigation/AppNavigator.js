import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderComp from '../components/HeaderComp';
import SplashScreen from '../screen/SplashScreen';
import { View } from 'react-native';
import BottomTab from './BottomTab';
import QRCode from '../components/QRCode';

  const AppNavigatior = () => {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <View style={{flex: 1}}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
               {/* <Stack.Screen name="HeaderComp" component={HeaderComp} /> 
               <Stack.Screen name="Home" component={Home} /> 
               <Stack.Screen name="Wealth" component={Wealth} /> 
               <Stack.Screen name="Insurance" component={Insurance} /> 
               <Stack.Screen name="Stores" component={Stores} />  */}
               <Stack.Screen name="SplashScreen" component={SplashScreen}  /> 
               <Stack.Screen name="BottomTab" component={BottomTab} /> 
               <Stack.Screen name='QRCode'component={QRCode}/>

            </Stack.Navigator>
        </View>
      </NavigationContainer>
    );
  };
  
  export default AppNavigatior;
  