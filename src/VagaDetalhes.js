// VagaDetalhes.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "react-native-vector-icons";

const VagaDetalhes = ({ route }) => {
  const { vaga } = route.params;
  const navigation = useNavigation();

  const navigateToEmpresaSobre = () => {
    navigation.navigate('Sobre a Empresa', { empresa: vaga.company, localizacao: vaga.location });
  };

  return (
    <View>
      <Text style={styles.detalheTitle}>{vaga.title}</Text>
      <Text style={styles.detalheCompany}>Nome da empresa: {vaga.company} 
      <Ionicons name="briefcase" size={18} color="#666" style={{ marginLeft: 10 }} />
      </Text>
      <Text style={styles.detalheSalary}>Salario: {vaga.salary}</Text>
      <Text style={styles.detalheTimeVaga}>O tempo para a candidatura vai de {vaga.datePosted} ate o {vaga.deadline}</Text>
      <Button style={styles.detalheButton} title="Clique aqui para saber mais sobre quem esta te contratando" onPress={navigateToEmpresaSobre} />
    </View>
  );
};
const styles = StyleSheet.create({
  detalheTitle:{
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 20
  },
  detalheCompany:{
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20
  },
  detalheSalary:{
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20
  },
  detalheTimeVaga:{
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  detalheButton:{
    width: 100,
    
  }
});
export default VagaDetalhes;
