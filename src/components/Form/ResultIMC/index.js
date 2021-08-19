import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

function ResultIMC(props) {
  return (
    <View style={styles.container}>
       <Text style={styles.message}>{props.messageResultIMC}</Text>
       <Text style={styles.resultImc}>{props.resultIMC}</Text>
    </View>
  )
}

export default ResultIMC