import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Life from '../compoments/life'
import Marcador from '../compoments/marcador'

export default class Jogador extends React.Component {
    constructor(props) {
        super(props);

    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.linha}>
          <Life inicial="20"/>
        </View>
        <View style={styles.linha}>
          <Marcador inicial="0" nome="Energia"/>
          <Marcador inicial="0" nome="M. no cemitério"/>
          <Marcador inicial="0" nome="Outro"/>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column', 
  },

  linha: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/5,
    flexDirection: 'row',
  }
});
