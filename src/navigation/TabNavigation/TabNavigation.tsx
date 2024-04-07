import React from 'react'
//library
import { Chip } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import { Home } from '../../screens/Home/Home';
import { Settings } from '../../screens/Settings/Settings';
//estilo
import { styles } from './styles';
//icons
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{
            tabBarStyle: {
              height: 80,
              backgroundColor: '#3AAFFF',
            },
            header: () => {
              return (<></>)}}}
        >
          <Tab.Screen
            name='Home'
            component={Home} 
            options={{ 
              tabBarShowLabel: false,
              title: 'Inicio', 
              tabBarIcon: (tabInfo) => {
                return (
                  tabInfo.focused ? 
                  <Chip
                    style={styles.chipStyle}
                    onPress={() => {}}
                    children={
                      <Entypo name='home' size={20} color={'black'}/>
                    }
                  />
                  : 
                  <Entypo name='home' size={20} color={'black'}/>
                )
              } 
            }}
          />
          <Tab.Screen
            name='Settings'
            component={Settings} 
            options={{ 
              tabBarShowLabel: false,
              title: 'Configuración', 
              tabBarIcon: (tabInfo) => {
                return (
                  tabInfo.focused ? 
                  <Chip
                    style={styles.chipStyle}
                    onPress={() => {}}
                    children={
                      <Ionicons name='settings' size={20} color={'black'}/>
                    }
                  />
                  : 
                  <Ionicons name="settings" size={20} color="black" />
                )
              } 
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
