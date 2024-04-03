import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { VAGAS } from '../data/mock-data';

const ITEMS_PER_PAGE = 5;

const VagaItem = ({ vaga }) => {
  const randomImageId = Math.floor(Math.random() * 1000); // Gera um ID aleatório para a imagem
  const imageUrl = `https://picsum.photos/200/200?random=${randomImageId}`; // URL da imagem aleatória
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('VagaDetalhes', { vaga })}>
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

const VagasList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(VAGAS.slice(0, ITEMS_PER_PAGE));
  const [page, setPage] = useState(1);

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
