import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { VAGAS } from '../data/mock-data';

// Define o número de itens por página
const ITEMS_PER_PAGE = 5;

// Componente que renderiza um item de vaga
const VagaItem = ({ vaga }) => {
  // Gera um ID aleatório para a imagem
  const randomImageId = Math.floor(Math.random() * 1000);
  // URL da imagem aleatória
  const imageUrl = `https://picsum.photos/200/200?random=${randomImageId}`;
  const navigation = useNavigation();

  return (
    // TouchableOpacity torna o componente acionável
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes da vaga', { vaga })}>
      <View style={styles.vagaItem}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{vaga.title}</Text>
          <Text style={styles.company}>{vaga.company}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Componente principal que lista as vagas
const VagasList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(VAGAS.slice(0, ITEMS_PER_PAGE));
  const [page, setPage] = useState(1);

  // Função para carregar mais itens ao alcançar o fim da lista
  const handleLoadMore = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        const newData = VAGAS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
        setData(prevData => [...prevData, ...newData]);
        setPage(prevPage => prevPage + 1);
        setLoading(false);
      }, 1000);
    }
  };

  // Renderiza um indicador de carregamento no final da lista
  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <VagaItem vaga={item} />}
        keyExtractor={vaga => vaga.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

// Estilos
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
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
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
