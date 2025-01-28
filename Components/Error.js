import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/style'

export default function error() {
  return (
    <View style={styles.error}>
      <Text style={styles.errorText}>Too many requests. Please wait momentarily.</Text>
    </View>
  )
}