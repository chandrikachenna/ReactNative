import React, {useState} from 'react';
import {TextInput as ReactNativeTextInput, StyleSheet} from 'react-native';

interface TextInputProps {
  type: 'default' | 'email-address' | 'numeric';
  placeholder: string;
  onChange: (text: string) => void;
  secureTextEntry: boolean;
  value: string;
  inputStyle: any;
}
class TextInput extends React.Component<TextInputProps> {
  render() {
    const {
      inputStyle,
      value,
      type,
      placeholder,
      onChange,
      secureTextEntry,
    } = this.props;
    return (
      <ReactNativeTextInput
        keyboardType={type}
        value={value}
        style={inputStyle}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
    );
  }
}

export {TextInput};
