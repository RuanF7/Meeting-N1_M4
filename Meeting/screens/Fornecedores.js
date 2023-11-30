import React, { useState } from 'react'

import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons"
import usuarios from '../data/usuarios';
import { ListItem, Avatar } from '@rneui/themed';

export default props => {

    function Fornecedores({ item: usuario }) {
      return (
        <View style={styles.container2}>
          <View>               
            <ListItem    
            linearGradientProps={{
              colors: ["#FF9800", "#F44336"],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
            key={usuario.id} 
            bottomDivider
            onPress={() => props.navigation.navigate('Cadastro')}            
            >                  
              <Avatar 
                rounded 
                source={{uri: usuario.avatar_url}}                              
              />                            
              <ListItem.Content style={styles.list}> 
                <ListItem.Title style={styles.listItems}>{usuario.name}</ListItem.Title>
                <ListItem.Subtitle style={styles.listItems}>{usuario.adress}</ListItem.Subtitle>
                <ListItem.Subtitle style={styles.listItems}>{usuario.contact}</ListItem.Subtitle>
                <ListItem.Subtitle style={styles.listItems}>{usuario.category}</ListItem.Subtitle>
              </ListItem.Content>              
            </ListItem>
          </View> 
        </View>    
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
      },
      container2: {       
        width: '100%',
        backgroundColor: '#191414',        
        paddingVertical: 10,         
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
        backgroundColor: '#191414',           
      },
      listItems: {
        color: '#1DB954',
      },
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
