import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import Home from '@/Screens/Home/Home'
import Coins from '@/Screens/Coins/Coins'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Wallet"
        component={Home}
        options={{
          headerShown:false,
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="Coins"
        component={Coins}
        options={{
          headerShown:false,
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
        <Tab.Screen
        name="Transfer"
        component={ExampleContainer}
        options={{
          headerShown:false,
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
         <Tab.Screen
        name="Settings"
        component={ExampleContainer}
        options={{
          headerShown:false,
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
