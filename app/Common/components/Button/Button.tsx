import React from 'react';
import {StyleSheet, Button as ReactNativeButton} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}
class Button extends React.Component<ButtonProps> {
  render() {
    const {title, onPress} = this.props;
    return <ReactNativeButton title={title} onPress={onPress} />;
  }
}

export {Button};
