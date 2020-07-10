import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components';
class Card extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    width: '100%',
  },
});
export {Card};
