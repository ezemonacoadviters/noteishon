import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TabNavigation } from './src/navigation/TabNavigation';

export const App = () => {
  return (
    <SafeAreaProvider>
      <TabNavigation/>
    </SafeAreaProvider>
  )
}
