import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {goToSignUpScene} from '../../../Authentication/utils/NavigationUtils';
import {goToAppScene} from '../../utils/NavigationUtils';
class HomePage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.text} onPress={goToAppScene}>
          Learn More
        </Text>
        <Text style={styles.text} onPress={goToSignUpScene}>
          CountryDashboard
        </Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  title: {
    color: '#61dafb',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export {HomePage};
