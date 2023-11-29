import React, { useState } from 'react'

import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons"
import usuarios from '../data/usuarios';
import { ListItem, Avatar } from '@rneui/themed';

export default props => {

    function Fornecedores({ item: usuario }) {
      return (
        <ListItem 
        style={styles.list}
        key={usuario.id} 
        bottomDivider
        onPress={() => props.navigation.navigate('Cadastro')}
        >          
          <Avatar 
            rounded 
            source={{uri: usuario.avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{usuario.name}</ListItem.Title>
            <ListItem.Subtitle>{usuario.adress}</ListItem.Subtitle>
            <ListItem.Subtitle>{usuario.contact}</ListItem.Subtitle>
            <ListItem.Subtitle>{usuario.category}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        
      )
    }  
      return (
        <View style={styles.container}>
           <FlatList            
            data={usuarios}
            keyExtractor={usuario => usuario.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={ Fornecedores }
          />
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
