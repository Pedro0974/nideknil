// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VagasList from './src/vagaPost'; // Seu componente de lista de vagas
import VagaDetalhes from './src/VagaDetalhes'; // Seu componente de detalhes da vaga
import EmpresaSobre from './src/empresaDetalhes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VagasList">
        <Stack.Screen name="VagasList" component={VagasList} />
        <Stack.Screen name="VagaDetalhes" component={VagaDetalhes} />
        <Stack.Screen name="EmpresaSobre" component={EmpresaSobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
