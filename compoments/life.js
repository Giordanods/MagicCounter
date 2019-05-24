import React from 'react';
import { StyleSheet, Text, View , Button, Dimensions} from 'react-native';



export default class Life extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          quantidade: this.props.inicial
        };
        //Bind das funções
        this.onPressMenos = this.onPressMenos.bind(this)
        this.onPressMais = this.onPressMais.bind(this)
    }

    onPressMais() {
        let numero = this.state.quantidade
        numero++
        this.setState({quantidade: numero})
    }

    onPressMenos() {
        let numero = this.state.quantidade
        numero--
        this.setState({quantidade: numero})
    }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}>
            <Button onPress={this.onPressMenos} title="menos" color="#841584" accessibilityLabel="Remover"/>
          </View>
          <View style={styles.boxMaior}>
              <Text style={styles.texto}>{this.state.quantidade}</Text>
          </View>
          <View style={styles.box}>
            <Button onPress={this.onPressMais} title="mais" color="#841584" accessibilityLabel="Adicionar"/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: 'row', 
  },
  box: {
      flex: 1,
      width: Dimensions.get('window').width/4
  },
  boxMaior: {
    flex: 1,
    width: Dimensions.get('window').width/2,
    alignItems: 'center',
  },
  texto: { 
    fontSize: 40,
    fontWeight: 'bold',
      
  }
});
