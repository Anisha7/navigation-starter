import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {


    return (
      <View style={styles.container}>
        <Text
          style={styles.title}
        >Home Screen</Text>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})