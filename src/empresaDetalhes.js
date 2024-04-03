// EmpresaSobre.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmpresaSobre = ({ route }) => {
  const { empresa, localizacao } = route.params;

  const descricaoEmpresa = "fazer uma descrição estatica para todas";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a Empresa</Text>
      <Text>Nome da Empresa: {empresa}</Text>
      <Text>Localização: {localizacao}</Text>
      <Text>Descrição da Empresa: {descricaoEmpresa}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default EmpresaSobre;
