import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "react-native-vector-icons";

const VagaDetalhes = ({ route }) => {
  const { vaga } = route.params;
  const navigation = useNavigation();

  // Função para navegar para a tela de detalhes da empresa
  const navigateToEmpresaSobre = () => {
    navigation.navigate('Sobre a empresa', { empresa: vaga.company, localizacao: vaga.location });
  };

  return (
    <View style={styles.container}>
      {/* Título da vaga */}
      <Text style={styles.title}>{vaga.title}</Text>
      <View style={styles.infoContainer}>
        {/* Informações sobre a vaga */}
        <View style={styles.infoRow}>
          <Ionicons name="briefcase" size={18} color="#666" />
          <Text style={styles.infoText}>{vaga.company}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar" size={18} color="#666" />
          <Text style={styles.infoText}>Período de Candidatura: {vaga.datePosted} - {vaga.deadline}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="cash" size={18} color="#666" />
          <Text style={styles.infoText}>Salário: {vaga.salary}</Text>
        </View>
        {/* Requisitos da vaga */}
        <View style={styles.requirementsContainer}>
          <Text style={styles.requirementsTitle}>Requisitos</Text>
          <View style={styles.requirementsContent}>
            {vaga.requirements.map((req, index) => (
              <View style={styles.requirementItem} key={index}>
                <Ionicons name="checkmark-circle-outline" size={18} color="#4CAF50" />
                <Text style={styles.requirementsText}>{req}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      {/* Botão para visualizar detalhes da empresa */}
      <View style={styles.buttonContainer}>
        <Button title="Sobre a empresa" onPress={navigateToEmpresaSobre} />
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
  },
  requirementsContainer: {
    marginTop: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    padding: 15,
  },
  requirementsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  requirementsContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  requirementsText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
});

export default VagaDetalhes;
