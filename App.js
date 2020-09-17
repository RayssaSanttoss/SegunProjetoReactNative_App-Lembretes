import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState ('');
  const[lembretes, setLembretes] = useState ([]);
  const[contadorLembretes, setContadorLembretes] = useState(0);

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes + 1);
      return[...lembretes, {key: contadorLembretes.toString(), value: lembrete}]
    });
    //console.log (lembrete);
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <View style={estilos.entradaView}>
        {/*usuário irá inserir seus lembretes aqui */}
        <TextInput 
        placeholder = "Lembrar..."
        style={estilos.lembreteTextInput}
        onChangeText={capturarLembrete}
        value={lembrete}
        />
        <Button
          title="Adicionar"
          onPress={adicionarLembrete}
        />
      </View>
      <View>

        <FlatList
          data={lembretes}
          renderItem={
            (lembrete) => (
              <View style={estilos.itemNaListaView}>
                <Text>{lembrete.item.value}</Text>
              </View>
            )
          }
        />
        
        {/*lembretes serão exibidos aqui 
        <ScrollView>
          {lembretes.map((lembrete) => (
            <View style={estilos.itemNaListaView} key={lembrete}>
              <Text >{lembrete}</Text>
            </View>
          ))}
        </ScrollView>
        */}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  telaPrincipalView: {
   padding: 50
  },
  lembreteTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth:1, 
    marginBottom: 4, 
    padding: 12,
    textAlign: 'center'
  },
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  entradaView: {
    marginBottom: 8
  }
});
