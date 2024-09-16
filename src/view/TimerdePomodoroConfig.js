import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const TimerdePomodoroConfig = ({ route, navigation }) => {
  const { workTime: initialWorkTime = 25, restTime: initialRestTime = 5 } = route.params || {};
  const [workTime, setWorkTime] = useState(initialWorkTime.toString());
  const [restTime, setRestTime] = useState(initialRestTime.toString());

  const saveConfig = () => {
    navigation.navigate('Timer', {
      workTime: parseInt(workTime),
      restTime: parseInt(restTime),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tempo de Trabalho (minutos):</Text>
      <TextInput
        keyboardType="numeric"
        value={workTime}
        onChangeText={setWorkTime}
        style={styles.input}
        theme={{ colors: { primary: '#FFF' } }}
      />
      <Text style={styles.label}>Tempo de Descanso (minutos):</Text>
      <TextInput
        keyboardType="numeric"
        value={restTime}
        onChangeText={setRestTime}
        style={styles.input}
        theme={{ colors: { primary: '#FFF' } }}
      />
      <Button mode="contained" onPress={saveConfig} style={styles.button}>
        Salvar Configurações
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#444', 
  },
  label: {
    fontSize: 18,
    color: '#FFF', 
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFF', 
    color: '#FFF', 
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFF', 
    color: '#000', 
  },
});

export default TimerdePomodoroConfig;
