import React from 'react'
import { Text } from 'react-native'
import { Modal } from 'react-native-paper'

export const DeleteModal = () => {
  return (
    <Modal
        visible={true}
        children={
            <Text>Hola</Text>
        }
    />

  )
}
