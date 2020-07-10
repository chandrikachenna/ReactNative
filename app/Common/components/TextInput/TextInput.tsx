import React, {useState} from 'react';
import {TextInput as ReactNativeTextInput, StyleSheet} from 'react-native';

interface TextInputProps {
  type: 'default' | 'email-address' | 'numeric';
  placeholder: string;
  onChange: (text: string) => void;
  secureTextEntry: boolean;
  value: string;
}
class TextInput extends React.Component<TextInputProps> {
  render() {
    const {value, type, placeholder, onChange, secureTextEntry} = this.props;
    return (
      <ReactNativeTextInput
        keyboardType={type}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
    );
  }
}

export default TextInput;
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f2f2f2',
    padding: 5,
    margin: 10,
    width: '100%',
  },
});
export {TextInput};
