import RadioForm, {
  RadioButton as ReactNativeRadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {Text} from 'react-native';
var radio_props = [
  {label: 'Male ', value: 'male'},
  {label: 'Female ', value: 'female'},
  {label: 'Other ', value: 'other'},
];
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

interface RadioButtonProps {
  onPressFunction: (value: string) => void;
}
class RadioButton extends Component<RadioButtonProps> {
  render() {
    const {onPressFunction} = this.props;
    return (
      <View style={styles.buttonsView}>
        <Text style={{fontWeight: 'bold'}}>Gender : </Text>
        <RadioForm
          radio_props={radio_props}
          initial={'male'}
          onPress={onPressFunction}
          formHorizontal={true}
          labelWrapStyle={{}}
        />
      </View>
    );
  }
}

export {RadioButton};

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
