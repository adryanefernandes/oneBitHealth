import React from 'react'
import { View, Text } from 'react-native'

function ResultIMC(props) {
  return (
    <View>
       <Text>{props.resultIMC}</Text>
       <Text>{props.messageResultIMC}</Text>
    </View>
  )
}

export default ResultIMC