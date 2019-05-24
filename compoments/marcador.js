import React from 'react';
import { StyleSheet, Text, View , Button, Dimensions} from 'react-native';



export default class Marcador extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          quantidade: this.props.inicial,
          nome: this.props.nome,
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
              <Text>{this.state.nome}</Text>
          </View>
          <View style={styles.box}>
            <Button onPress={this.onPressMais} title="+" color="#841584" accessibilityLabel="Adicionar"/>
          </View>
          <View style={styles.boxMaior}>
              <Text>{this.state.quantidade}</Text>
          </View>
          <View style={styles.box}>
            <Button onPress={this.onPressMenos} title="-" color="#841584" accessibilityLabel="Remover"/>
            
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
    flexDirection: 'column', 
  },
  box: {
      flex: 1,
      height: Dimensions.get('window').height/5
  },
  boxMaior: {
    flex: 1,
    height: Dimensions.get('window').height/2,
    alignItems: 'center',
}
});
