import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const drawNumber = () => {
    if (gameOver === false) {
      const num = Math.ceil( Math.random() * 10);
      const newScore = score + num;


      setScore(newScore);

      if (newScore >= 21) {
        setGameOver(true);
      }
    }
  }

  const reset = () => {
    setScore(0);
    setGameOver(false);
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Score: {score}</Text>
      <TouchableOpacity onPress={drawNumber}>
        <Text>Draw a number</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={reset}>
        <Text>Reset</Text>
      </TouchableOpacity>
      {gameOver && <Text>{score === 21 ? 'Gewonnen' : 'Verloren'}</Text>}
    </View>
  );
  
}

