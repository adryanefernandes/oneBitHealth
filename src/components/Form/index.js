import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
  Item
} from 'react-native'

import ResultIMC from './ResultIMC'

import styles from './styles'

function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  const imcCalculator = () => {
    let heightFormat = height.replace(',', '.')
    const result = (weight / (heightFormat * heightFormat)).toFixed(2)

    const newImc = {
      id: new Date().getTime(),
      imc: result
    }
    setImcList([...imcList, newImc])
    setImc(result)
  }

  const verificationImc = () => {
    if (imc === null) {
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

      Keyboard.dismiss()
    } else {
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura")
    }
  }

  const renderList = ({ item }) => {
    return (
      <Text style={styles.imcItemContainer}>
        <Text style={styles.textItemContainer}>Resultado IMC = </Text>
        {item.imc}
      </Text>
    )
  }

  return (
    <View style={styles.formContext}>
      {imc === null ?
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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

        </Pressable>
        :
        <View style={styles.resultImc}>
          <ResultIMC
            messageResultIMC={messageImc}
            resultIMC={imc}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButton}> {textButton} </Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imcList}
        renderItem={renderList}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Form