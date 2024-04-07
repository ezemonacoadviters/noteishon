import React, { Children } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
    title: string
    children?: JSX.Element
}

export const Layout = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
})
