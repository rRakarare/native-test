import { View, Text } from 'react-native'
import React from 'react'
import "../global.css"
import { Slot, Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />

    </Stack>
  )
}

export default _layout