import React, { useState } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FloatingButton } from '../components/FloatingButton'
import { AddModal } from '../components/AddModal'

export const Home = () => {

    const [nota, setNota] = useState('')
    const [open, setOpen] = useState<boolean>(false)

  return (
    <SafeAreaView style={styles.mainContainer}>
        {/* <View style={styles.container}>
            <Text style={styles.title}>to deishon</Text>
        </View>
        <FloatingButton onPress={() => setNota}/> */}
        <AddModal/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#0B102C',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    title: {
        fontSize: 30,
        color: 'white'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})