import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
    <View style={{flex:1}}>
        <SafeAreaProvider>
            <AppNavigator/>
          </SafeAreaProvider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})