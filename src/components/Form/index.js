import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import { useForm } from '../../hooks/useForm'
import { useInput } from '../../hooks/useInput'

import ResultIMC from './ResultIMC'

function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular IMC')

  const imcCalculator = () => {
    const result = (weight / (height * height)).toFixed(2)

    setImc(result)
  }

  const validationImc = () => {
    if (weight !== null && height !== null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu IMC é igual:")
      setTextButton("Calcular novamente")
    } else {
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura")
    }
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType='numeric'
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75"
          keyboardType='numeric'
        />

        <Button
          title={textButton}
          onPress={() => validationImc()}
        />
      </View>
      <ResultIMC
        messageResultIMC={messageImc}
        resultIMC={imc}
      />
    </View>
  )
}

export default Form