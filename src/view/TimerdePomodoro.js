import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const TimerdePomodoro = ({ route, navigation }) => {
  const { workTime = 30, restTime = 5 } = route.params || {};
  const [timeLeft, setTimeLeft] = useState(workTime * 60); 
  const [isWorking, setIsWorking] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
    } else if (timeLeft === 0) {
      setIsWorking(!isWorking);
      setTimeLeft(isWorking ? restTime * 60 : workTime * 60);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(workTime * 60);
  };

  useEffect(() => {
    if (route.params?.workTime || route.params?.restTime) {
      setTimeLeft((route.params.workTime || workTime) * 60);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.timerDisplay}>
        <Text style={styles.timerText}>
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={startTimer} style={styles.button}>Iniciar</Button>
        <Button mode="contained" onPress={pauseTimer} style={styles.button}>Pausar</Button>
        <Button mode="contained" onPress={resetTimer} style={styles.button}>Redefinir</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444', 
  },
  timerDisplay: {
    backgroundColor: '#FFF', 
    padding: 10, 
    borderRadius: 50,
    marginBottom: 60, 
    minWidth: '90%', 
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    color: '#444', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', 
    paddingHorizontal: 20, 
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: '#FFF', 
    color: '#000', 
  },
});

export default TimerdePomodoro;
