// EmpresaSobre.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmpresaSobre = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a Empresa</Text>
      <Text>Nome da Empresa:</Text>
      <Text>Localização:</Text>
      <Text>Descrição da Empresa:</Text>
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
