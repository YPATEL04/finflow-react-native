import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import StatisticScreen from '../screens/StatisticScreen';
import CardScreen from '../screens/CardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { COLORS } from '../assets/colors';

import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.ebonyClay,
        tabBarInactiveTintColor: COLORS.santaGrey,
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:
            | 'home'
            | 'home-outline'
            | 'chart-line'
            | 'credit-card'
            | 'credit-card-outline'
            | 'account'
            | 'account-outline';

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;

            case 'Statistics':
              iconName = 'chart-line';
              break;

            case 'Cards':
              iconName = focused ? 'credit-card' : 'credit-card-outline';
              break;

            case 'Profile':
              iconName = focused ? 'account' : 'account-outline';
              break;

            default:
              iconName = 'home-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={24} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Statistics" component={StatisticScreen} />

      <Tab.Screen name="Cards" component={CardScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
