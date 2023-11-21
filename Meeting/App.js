import Cadastro from './screens/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fornecedores from './screens/Fornecedores';


const Stack = createNativeStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Fornecedores' component={Fornecedores} />
      </Stack.Navigator>        
    </NavigationContainer>
  );
}

