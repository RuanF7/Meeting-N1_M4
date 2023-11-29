import React, { useState } from 'react'

import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons"
import Usuarios from '../data/Usuarios';
import { ListItem } from '@rneui/base';

export default props => {

    function Fornecedores({item: Usuarios}) {
      return (
        <ListItem
          leftAvatar={{source: {url: Usuarios.avatarURL}}}
        />
      )
    }  
      return (
        <View style={styles.container}>
          <Text style={styles.cadastro}>Fornecedores</Text>
          <FlatList
            style={styles.list}
            data={Usuarios}
            keyExtractor={Usuarios => Usuarios.name.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={ Fornecedores } />
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
        fontSize: 18,
      },
      list: {
        color: '#1DB954',
      }
    });
    
  /*=> ( 
    <View>
    <Text>{item}</Text>
    <TouchableOpacity>
      <MaterialIcons
        name="delete-forever"
        size={25}
        color="#1DB954"
      />
    </TouchableOpacity>          
  </View>
)}
/>
<TouchableOpacity style={styles.button} title='Ir para Cadastro' onPress={() => navigation.navigate("Cadastro")}>
  <Text style={styles.buttonText}>Enviar</Text>
</TouchableOpacity>

*/
