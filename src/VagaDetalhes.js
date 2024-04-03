// VagaDetalhes.js

import React from 'react';
import { View, Text } from 'react-native';

const VagaDetalhes = ({ route }) => {
  const { vaga } = route.params;

  return (
    <View>
      <Text>{vaga.title}</Text>
      <Text>{vaga.company}</Text>
      {/* Adicione mais informações da vaga aqui */}
    </View>
  );
};

export default VagaDetalhes;
