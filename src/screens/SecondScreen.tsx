import React from 'react'
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SecondScreen = ({navigation, route}: any) => {

    const colorScheme = useColorScheme()

    const themeTextStyle = colorScheme === 'light' ? styles.light : styles.dark;
    
  return (
    <SafeAreaView style={[themeTextStyle]}>
        <Text>Second</Text>
        <Button
            title='Go Home'
            onPress={() => navigation.popToTop()}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    light: {
        backgroundColor: 'white',
        flex: 1
    },
    dark: {
        backgroundColor: 'black',
        flex: 1
    }
})