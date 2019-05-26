import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Jogador from './compoments/jogador'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.linha}>
          <Jogador corFundo="gray"/>
        </View>
        <View style={styles.linha}>
          <Jogador corFundo="red" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column', 
  },

  linha: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
    flexDirection: 'row',
  }
});
