//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
var SharedPreferences = require('react-native-shared-preferences');

// create a component
class MyClass extends Component {

  setItem = () => {
    SharedPreferences.setItem("key","wandipratama");
    SharedPreferences.setItem("key1","Jogja");
    console.log('setItem')
  }

  componentDidMount() {
    SharedPreferences.getItems(["key","key1"], function(value){
      console.log(value[0] + '' + 'Dari ComponentDidMount');
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={{height : 50, width: 100, backgroundColor : 'green', alignItems: 'center', justifyContent : 'center', borderRadius: 20}} onPress={() => this.setItem()}>
        <Text style={{color: '#fff', fontSize : 16, fontWeight : 'bold'}}>Test SetItem</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyClass;
