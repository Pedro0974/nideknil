// VagaDetalhes.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";

const VagaDetalhes = ({ route }) => {
  const { vaga } = route.params;
  const navigation = useNavigation();

  const navigateToEmpresaSobre = () => {
    navigation.navigate('Sobre a Empresa', { empresa: vaga.company, localizacao: vaga.location });
  };

  return (
    <View>
      <Text style={styles.detalheTitle}>{vaga.title}</Text>
      <Text style={styles.detalheCompany}>Nome da empresa: {vaga.company}</Text>
      <Text style={styles.detalheSalary}>Salario: {vaga.salary}</Text>
      <Text style={styles.detalheTimeVaga}>O tempo para a candidatura vai de {moment(vaga.datePosted).format("DD/MM/YYYY")} ate o {moment(vaga.deadline).format("DD/MM/YYYY")}</Text>
      <Button title="Sobre a Empresa" onPress={navigateToEmpresaSobre} />
    </View>
  );
};
const styles = StyleSheet.create({
  detalheTitle:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 20
  },
  detalheCompany:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20
  },
  detalheSalary:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20
  },
  detalheTimeVaga:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
});
export default VagaDetalhes;
