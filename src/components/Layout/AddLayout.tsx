import React, { Children, useState } from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FloatingButton } from '../FAB/FloatingButton'
import { AddModal } from '../AddModal/AddModal'

interface Props {
    title: string
    children?: JSX.Element
}

export const AddLayout = (props: Props) => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal((prev) => !prev)
    }

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <ScrollView>
            {props.children}
        </ScrollView>
        <FloatingButton
            onPress={() => {}}
            containerStyle={styles.floattingButton}
        />
        <AddModal
            onClose={handleOpenModal}
            onPress={() => {}}
            visible={openModal}
        />
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
    addButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    floattingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    }
})
