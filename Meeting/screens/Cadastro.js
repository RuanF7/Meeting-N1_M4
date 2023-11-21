import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

function Cadastro({navigation}) {
  const { control, handleSubmit, formState: { errors } } = useForm ({})


  return (
  <View style={styles.container}>
    <Text style={styles.cadastro}>Cadastro</Text>
    <StatusBar style="light" />
    <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Nome do fornecedor"
          />
        )}
    />
    <Controller
        control={control}
        name="endereco"
        render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Endereço"
          />
        )}
    />
    <Controller
        control={control}
        name="contato"
        render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Contato"
          />
        )}
    />
    <Controller
        control={control}
        name="categoria"
        render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Categoria de produtos"
          />
        )}
    />

    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate("Fornecedores")}
    >
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

export default Cadastro;
