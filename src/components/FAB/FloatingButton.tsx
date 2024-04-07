import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

interface Props {
    onPress: () => void
    containerStyle?: any
}

export const FloatingButton = (props: Props) => {
  return (
    <View style={props.containerStyle}>
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>  
                <AntDesign name="plus" size={30} color="white" />
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: '#3AAFFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
