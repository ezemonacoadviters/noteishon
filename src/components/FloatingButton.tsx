import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Touchable from './Touchable';

interface Props {
    onPress: () => void
}

export const FloatingButton = (props: Props) => {
  return (
    <View>
        <Touchable onPress={props.onPress}>
            <View style={styles.container}>  
                <AntDesign name="plus" size={50} color="black" />
            </View>
        </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
