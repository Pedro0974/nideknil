import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { VAGAS } from '../data/mock-data';

const VagaItem = ({ vaga }) => {
  const randomImageId = Math.floor(Math.random() * 1000); // Gera um ID aleatório para a imagem
  const imageUrl = `https://picsum.photos/200/200?random=${randomImageId}`; // URL da imagem aleatória

  return (
    <View style={styles.vagaItem}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{vaga.title}</Text>
        <Text style={styles.company}>{vaga.company}</Text>
      </View>
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
    flexDirection: 'row', // Para exibir a imagem e o texto na mesma linha
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Para ocupar todo o espaço disponível ao lado da imagem
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: 'gray',
  },
});

export default VagasList;
