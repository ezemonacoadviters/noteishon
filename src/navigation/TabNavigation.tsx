import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Home } from '../screens/Home';
import { SecondScreen } from '../screens/SecondScreen';
import { Notes } from '../screens/Notes';

export const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={{
          tabBarStyle: {
           height: 100,
           borderTopWidth: 2,
          },
          tabBarActiveTintColor: 'red'
        }}>
            <Tab.Screen name='Home' component={Home} options={{ title: 'Inicio' }}/>
            <Tab.Screen name='Second' component={SecondScreen} options={{ title: 'Mi Dia'}}/>
            <Tab.Screen name='Three' component={SecondScreen} options={{ title: 'Importante'}}/>
            <Tab.Screen name='Notes' component={Notes} options={{ title: 'Notas'}}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
