import React from 'react'
import { TextInput, View, Text, Button } from 'react-native'

import ResultIMC from './ResultIMC'

function Form() {
  return (
    <View>
       <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType='numeric'
        />

        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 75"
          keyboardType='numeric'
        />

        <Button 
          title="Calcular IMC"
          onPress={''}
        />
      </View> 
      <ResultIMC 
        messageResultIMC={'messageIMC'}
        resultIMC={'IMC'}
      />
    </View>
  )
}

export default Form