// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.col12}>
      <StatusBar barStyle='light-content'/>

      <View style={styles.topBar}/>

      {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
      <View style={styles.fullRow}>
        <View style={styles.leftBox}>
          <Text style={styles.leftText}>I am on the left</Text>
          <View style={styles.leftButton}>
            <Text style={{color: 'white'}}>floating here</Text>
          </View>
        </View>
        <View style={styles.rightBox}>
          <Text>I'm on the right</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.bottomBar}>
          <Text>I take all the space</Text>
        </View>
        <View style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>OK</Text>
        </View>
      </View>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftBox: {
    flex: 1,
    backgroundColor: 'pink'
  },

  leftText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  },

  leftButton: {
    backgroundColor: 'purple',
    position: 'absolute',
    bottom: 10,
    right: 18,
    padding: 20
  },

  rightBox: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  col12: {
    flex: 1
  },

  col6: {
    flex: 0.5
  },

  topBar: {
    height: 50,
    backgroundColor: 'purple'
  },

  row: {
    flexDirection: 'row'
  },

  fullRow: {
    flexDirection: 'row',
    flex: 1
  },

  bottomBar: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'lightblue'
  },

  bottomButton: {
    backgroundColor: 'white',
  },

  bottomButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  }

});
