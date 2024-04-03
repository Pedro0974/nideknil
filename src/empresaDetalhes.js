import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from "react-native-vector-icons";

const EmpresaSobre = ({ route }) => {
  // Extrai os parâmetros da rota
  const { empresa, localizacao } = route.params;

  // Array com as perguntas e respostas sobre a empresa
  const descricaoEmpresa = [
    { pergunta: 'Quem somos nós?', resposta: 'Somos uma empresa comprometida com a excelência em tudo o que fazemos.' },
    { pergunta: 'Quais são nossos objetivos?', resposta: 'Acreditamos na inovação, na criatividade e na colaboração como pilares fundamentais do nosso sucesso.' },
    { pergunta: 'No que acreditamos?', resposta: 'Estamos em constante busca por talentos que compartilhem dos nossos valores e que estejam dispostos a contribuir para o crescimento e desenvolvimento da equipe.' },
    { pergunta: 'Por que fazer parte da nossa equipe?', resposta: 'Aqui, você terá a oportunidade de trabalhar em projetos desafiadores, aprender e crescer profissionalmente em um ambiente dinâmico e acolhedor. Se você é apaixonado por fazer a diferença e quer fazer parte de uma equipe dedicada e motivada, venha se juntar a nós!' },
  ];

  return (
    // Componente ScrollView para permitir rolar o conteúdo
    <ScrollView contentContainerStyle={styles.container}>
      {/*componentes com suas classes de estilo definidas e exibindo os dados buscados pelo parametro da rota*/}
      <Text style={styles.company}>{empresa}</Text> 
      <View style={styles.infoContainer}>
        <Ionicons name="location-outline" size={18} color="#666" />
        <Text style={styles.info}>Localização: {localizacao}</Text>
      </View>
      
      {/*background adicionado nas perguntas e respostas sobre as empresas na view para fazer um
       container so de perguntas e respostas*/}
       
      <View style={styles.descricaoBackground}>
        {descricaoEmpresa.map((item, index) => (
          <View key={index} style={styles.descricaoContainer}>
            <Text style={styles.pergunta}>{item.pergunta}</Text>
            <Text style={styles.resposta}>{item.resposta}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  company: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginLeft: 5,
  },
  descricaoBackground: {
    backgroundColor: '#f5f5f5',
    marginTop: 10,
    padding: 15, 
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  descricaoContainer: {
    marginBottom: 20,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resposta: {
    fontSize: 16,
  },
});

export default EmpresaSobre;
