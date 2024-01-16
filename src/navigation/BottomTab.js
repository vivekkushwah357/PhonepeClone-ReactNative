import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../screen/Home';
import Stores from '../screen/Stores';
import Insurance from '../screen/Insurance';
import Wealth from '../screen/Wealth';
import History from '../screen/History';

const Tab = createBottomTabNavigator();

const BottomTab = ({ route }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const getTabIconStyles = (tabName) => {
    const focusedRoute = getFocusedRouteNameFromRoute(route) || 'Home';
    const isActiveTab = tabName === focusedRoute;

    return {
        justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isActiveTab ? 'purple' : '#bdbdbd',
      borderRadius: scale(99),
      height: scale(25),
      width: scale(25),
      paddingBottom: verticalScale(2),
    };  
  };

  const getTabIconTintColor = (tabName) => {
    return tabName === 'Home' || tabName === 'Stores' ? 'white' : 'Insurance' ?'white' : 'Wealth'?'White' : 'History'?'white' : 'gray';
  }; 

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: '#bdbdbd',
       
        labelStyle: {
          fontSize: moderateScale(12),
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={getTabIconStyles('Home')}>
              <Image
                source={require('../images/smart.png')}
                style={{ width: scale(16), height: scale(16), tintColor: getTabIconTintColor('Home') }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={getTabIconStyles('Stores')}>
              <Image
                source={require('../images/store.png')}
                style={{ width: scale(18), height: scale(18), tintColor: getTabIconTintColor('Stores') }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={getTabIconStyles('Insurance')}>
              <Image
                source={require('../images/insurance.png')}
                style={{ width: scale(18), height: scale(18),tintColor: getTabIconTintColor('Insurance') }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wealth"
        component={Wealth}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={getTabIconStyles('Wealth')}>
              <Image
                source={require('../images/rupee.png')}
                style={{ width: scale(18), height: scale(18), tintColor:getTabIconTintColor('Wealth') }}
        />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={getTabIconStyles('History')}>
              <Image
                source={require('../images/transaction.png')}
                style={{ width: scale(18), height: scale(18), tintColor: getTabIconTintColor('History') }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
