import Cadastro from './screens/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fornecedores from './screens/Fornecedores';
import { Button, Icon } from '@rneui/base';


const Stack = createNativeStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Fornecedores' component={Fornecedores}
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("Cadastro")}
                  type="clear"
                  icon={<Icon name="add" size={25} color='#191414'/>}
                />
              )
            }
          }}
        />
      </Stack.Navigator>        
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#1DB954',
  },
  headerTintColor: '#191414',
  headerTintStyle: {
    fontWeight: 'bold',
  }
}