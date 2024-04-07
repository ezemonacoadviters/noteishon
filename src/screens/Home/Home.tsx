import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { ScrollView, View } from 'react-native'
import { FloatingButton } from '../../components/FAB/FloatingButton'

export const Home = () => {
  return (
    <Layout title='To-Do'>
        <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        }}>
            <FloatingButton onPress={() => {}}/>
        </View>
    </Layout>
  )
}

