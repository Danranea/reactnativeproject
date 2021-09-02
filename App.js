import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Modal
} from "react-native";

import Constants from 'expo-constants';

const DATA = [
  {
    id: 1,
    email: "daniloranea@gmail.com",
    first_name: "Danilo",
    last_name: "Ranéa"
  },
  {
    id: 2,
    email: "joão@email.com",
    first_name: "João",
    last_name: "Alfredo"
  },
  {
    id: 3,
    email: "paulohenrique@gmail.com",
    first_name: "Paulo",
    last_name: "Souza"
  },
  {
    id: 4,
    email: "silascavalcante@gmail.com",
    first_name: "Sillas",
    last_name: "Cavalcante"
  },
  {
    id: 5,
    email: "paulocosta@gmail.com",
    first_name: "Paulo",
    last_name: "Costa"
  },
  {
    id: 6,
    email: "talitaranea@email.com",
    first_name: "Talita",
    last_name: "Ranéa"
  },
  {
    id: 7,
    email: "cleidetemoteo@gmail.com",
    first_name: "Cleide",
    last_name: "Temoteo"
  },
  {
    id: 8,
    email: "joelranea@gmail.com",
    first_name: "Joel",
    last_name: "Ranéa"
  },
  {
    id: 9,
    email: "augustoroberto@gmail.com",
    first_name: "Augusto",
    last_name: "Roberto"
  },
  {
    id: 10,
    email: "josepaulo@gmail.com",
    first_name: "José",
    last_name: "Paulo"
  },
];

const ShowDetalhes = ({ display, toogleModal, mensagem }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={display}
    onRequestClose={toogleModal}
  >

    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Pressable onPress={toogleModal}>
          <Text>{mensagem}</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
)

const Pessoa = ({ nome, email, link }) => {
  const [modal, setModal] = React.useState(false)

  function mudaModal() {
    setModal(!modal)
  }

  return (
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={email} />

      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
  )
}


export default function App() {

  function meuItem({item}){
    let nomeCompleto = item.first_name + " " + item.last_name
    
    return(
      <Pessoa nome={nomeCompleto} 
              link={item.avatar}
              email={item.email}
      />
    )
  }

  function renderItem({ item }) {
    let nomeCompleto = item.first_name + " " + item.last_name;

    return (
      <Pessoa
      nome={nomeCompleto} 
      link={item.avatar}
      email={item.email}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00BFFF',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#B0C4DE",
    borderRadius: 10,
    padding: 50,
    alignItems: "center",
    shadowColor: "#87CEEB",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});