import React, { useState } from 'react'
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,  
  Vibration,
  Pressable,
  Keyboard
} from 'react-native'

import ResultIMC from './ResultIMC'

import styles from './styles'

function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular IMC')
  const [errorMessage, setErrorMessage] = useState(null)

  const imcCalculator = () => {
    const result = (weight / (height * height)).toFixed(2)

    setImc(result)
  }

  const verificationImc = () => {
    if(imc === null){
      Vibration.vibrate()
      setErrorMessage("Campo obrigatório")
    }
  }

  const validationImc = () => {
    if (weight !== null && height !== null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu IMC é igual:")
      setTextButton("Calcular novamente")
      setErrorMessage(null)
    } else {
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura")
    }
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura (m)</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.75"
          keyboardType='numeric'
        />

        <Text style={styles.formLabel}>Peso (kg)</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 75"
          keyboardType='numeric'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButton}> {textButton} </Text>
        </TouchableOpacity>
      </View>
      <ResultIMC
        messageResultIMC={messageImc}
        resultIMC={imc}
      />
    </Pressable>
  )
}

export default Form