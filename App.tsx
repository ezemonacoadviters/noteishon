import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TabNavigation } from './src/navigation/TabNavigation/TabNavigation';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
      <PaperProvider>
        <SafeAreaProvider>
              <TabNavigation/>
        </SafeAreaProvider>
      </PaperProvider>
  )
}
