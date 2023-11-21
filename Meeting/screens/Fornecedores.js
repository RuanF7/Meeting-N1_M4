import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Fornecedores({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.cadastro}>Fornecedores</Text>
      <TouchableOpacity style={styles.button} title='Ir para Cadastro' onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    alignItems: 'center',
    justifyContent: 'center',  
    paddingHorizontal: 18,  
  },
  cadastro: {
    color: '#1DB954',
    fontSize: 50,
    paddingBottom: 50,
  },  
  input: {
    width: '100%',
    height: 40,    
    backgroundColor: '#1DB954',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#1DB954',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontWeight: 'bold',
    fontsize: 18,
  },
});

export default Fornecedores;
