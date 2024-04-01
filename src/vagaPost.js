import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { VAGAS } from '../data/mock-data';

const VagaItem = ({ vaga }) => {
  return (
    <View style={styles.vagaItem}>
      <Text style={styles.title}>{vaga.title}</Text>
      <Text style={styles.company}>{vaga.company}</Text>
      <Text style={styles.location}>{vaga.location}</Text>
      <Text style={styles.description}>{vaga.description}</Text>
      <Text style={styles.salary}>{vaga.salary}</Text>
    </View>
  );
};

const VagasList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={VAGAS}
        renderItem={({ item }) => <VagaItem vaga={item} />}
        keyExtractor={vaga => vaga.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  vagaItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: 'gray',
  },
  location: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
  },
  description: {
    marginTop: 5,
  },
  salary: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default VagasList;
