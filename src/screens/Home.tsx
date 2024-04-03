import React from 'react'
import { Button, StyleSheet, Text, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Home = ({ navigation }: any) => {

    const colorScheme = useColorScheme()

    const themeTextStyle = colorScheme === 'light' ? styles.light : styles.dark;

  return (
    <SafeAreaView style={[styles.container, themeTextStyle]}>
        <Text>Home</Text>
        <Button
            title='Go'
            onPress={() => navigation.navigate('Second', {
                name: 'Ezequiel',
                lastname: 'Monaco',
                age: 21
            })}
        >
        </Button>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {    
        flex: 1,
    },
    light: {
        backgroundColor: 'white',
    },
    dark: {
        backgroundColor: 'black',
    }
})