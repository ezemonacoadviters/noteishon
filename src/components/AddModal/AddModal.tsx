import React, { useEffect, useRef, useState } from 'react';
import { View, Modal, TouchableOpacity, StyleSheet, Dimensions, Alert, TextInput, Button, Text } from 'react-native';

interface Props {
    onPress: () => void,
    onClose: () => void,
    visible: boolean
}
export const AddModal = (props: Props) => {

    const [taskText, setTaskText] = useState('')

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onClose}
        >
            <TouchableOpacity activeOpacity={1} style={styles.modalBackground} onPress={props.onClose}>
                <View style={styles.modalContainer}>
                    <TextInput 
                    placeholder='Agrega una tarea...'
                    onChangeText={(text) => setTaskText(text)}
                    />
                    <TouchableOpacity onPress={props.onPress}>
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'black'
                        }}>
                            <Text style={{ color: 'white'}}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
    }

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

