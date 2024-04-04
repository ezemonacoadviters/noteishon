import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TabNavigation } from './src/navigation/TabNavigation';
import { Home } from './src/screens/Home';

export const App = () => {
  return (
    <SafeAreaProvider>
      <Home/>
    </SafeAreaProvider>
  )
}
