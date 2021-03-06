import React from 'react'
import { View, Text, Share, TouchableOpacity } from 'react-native'
import styles from './styles'

function ResultIMC(props) {

  const onShare = async () => {
    await Share.share({
      message: `Meu imc hoje é: ${props.resultIMC}`
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{props.messageResultIMC}</Text>
      <Text style={styles.resultImc}>{props.resultIMC}</Text>
      
      <View style={styles.boxShare}>
        <TouchableOpacity
          onPress={onShare}
          style={styles.shared}
        >
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ResultIMC