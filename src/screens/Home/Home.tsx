import React, { useState } from 'react'
import { AddLayout } from '../../components/Layout/AddLayout'
import { StyleSheet, View } from 'react-native'
import { Card } from '../../components/Card/Card'

import { tasks } from '../../../data.json'
import { DeleteModal } from '../../components/DeleteModal/DeleteModal'

export const Home = () => {
  return (
    <AddLayout
        title='To-Do'
    >
        <View style={styles.tasksContainer}>
            {tasks.map((item) => (
                <Card
                    key={item.id}
                    text={item.text}
                    onDelete={() => console.log('Delete')}
                    onEdit={() => console.log('Edit')}
                />
            ))}
        </View>
    </AddLayout>
  )
}

const styles = StyleSheet.create({
    tasksContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
