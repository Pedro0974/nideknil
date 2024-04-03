// VagaDetalhes.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VagaDetalhes = ({ route }) => {
  const { vaga } = route.params;
  const navigation = useNavigation();

  const navigateToEmpresaSobre = () => {
    navigation.navigate('EmpresaSobre');
  };

  return (
    <View>
      <Text>{vaga.title}</Text>
      <Text>{vaga.company}</Text>
      <Button title="Sobre a Empresa" onPress={navigateToEmpresaSobre} />
    </View>
  );
};

export default VagaDetalhes;
