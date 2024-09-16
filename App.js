import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TimerdePomodoro from './src/view/TimerdePomodoro';
import TimerdePomodoroConfig from './src/view/TimerdePomodoroConfig';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: '#FFF',
    accent: '#000',
    background: '#000',
    surface: '#000',
    text: '#FFF',
    placeholder: '#FFF',
    notification: '#FFF',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timer">
          <Stack.Screen 
            name="Timer" 
            component={TimerdePomodoro} 
            options={({ navigation }) => ({
              headerRight: () => (
                <Ionicons 
                  name="settings-outline" 
                  size={24} 
                  color="#FFF" 
                  style={{ marginRight: 15 }}
                  onPress={() => navigation.navigate('Configurações')} 
                />
              ),
              headerStyle: {
                backgroundColor: '#000', 
              },
              headerTintColor: '#FFF', 
            })}
          />
          <Stack.Screen 
            name="Configurações" 
            component={TimerdePomodoroConfig} 
            options={{
              headerStyle: {
                backgroundColor: '#000', 
              },
              headerTintColor: '#FFF', 
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
