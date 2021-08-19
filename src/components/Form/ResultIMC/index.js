import React from 'react'
import { View, Text } from 'react-native'

function ResultIMC(props) {
  return (
    <View>
       <Text>{props.messageResultIMC}</Text>
       <Text>{props.resultIMC}</Text>
    </View>
  )
}

export default ResultIMC