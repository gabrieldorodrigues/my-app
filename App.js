import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const verificarNumero = () => {
    const numeroGerado = Math.floor(Math.random() * 11);
    const numeroUsuario = parseInt(inputValue);

    if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 10) {
      Alert.alert('Erro', 'Por favor, insira um número válido entre 0 e 10.');
      return;
    }

    if (numeroUsuario === numeroGerado) {
      Alert.alert('Resultado', 'Você acertou!');
    } else {
      Alert.alert('Resultado', 'Você errou! O número era ' + numeroGerado);
    }

    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o Número</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite um número de 0 a 10"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Verificar" onPress={verificarNumero} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});
