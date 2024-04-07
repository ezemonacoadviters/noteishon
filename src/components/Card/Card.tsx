import React, { Key } from 'react'
import { View, StyleSheet, Text, Touchable, TouchableOpacity, Pressable } from 'react-native';

//icons
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


interface Props {
    text: string
    onDelete: () => void
    key: Key
}

export const Card = (props: Props) => {
  return (
    <View style={styles.container} key={props.key}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
        <View style={styles.actionsContainer}>
            <Pressable onPress={() => {}}>
                <View style={styles.editContainer}>
                    <Feather name="edit-2" size={20} color="white" />
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.deleteContainer}>
                    <MaterialIcons name="delete" size={24} color="white" />
                </View>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '97%',
        borderRadius: 5,
        height: 100,
        backgroundColor: 'white',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        flexDirection: 'row',
        marginBottom: 30
    },
    textContainer: {
        width: '80%',
        padding: 20,
    },
    text: {
        fontSize: 17,
    },
    actionsContainer: {
        height: '100%',
        width: '20%',
    },
    editContainer: {
        backgroundColor: 'orange',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
    },
    deleteContainer: {
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 5
    }
})
