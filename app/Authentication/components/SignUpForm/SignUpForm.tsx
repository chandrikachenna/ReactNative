import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, ScrollView} from 'react-native';
import {Card} from '../../../Common/components/Card';
import i18n from '../../../Common/i18n/i18n';
import {Title, FormText, Header, Form, NameDivision} from './styledComponents';
import {TextInput} from '../../../Common/components/TextInput';
import {RadioButtons} from '../../../Common/components/RadioButtons';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
@observer
class SignUpForm extends Component {
  @observable firstName!: string;
  @observable lastName!: string;
  @observable email!: string;
  @observable mobileNumber!: string;
  @observable password!: string;
  @observable confirmPassword!: string;
  @action.bound
  onChangeFirstName = (value: string) => {
    this.firstName = value;
  };
  @action.bound
  onChangeLastName = (value: string) => {
    this.lastName = value;
  };
  @action.bound
  onChangeEmail = (value: string) => {
    this.email = value;
  };
  @action.bound
  onChangeMobileNumber = (value: string) => {
    this.mobileNumber = value;
  };
  @action.bound
  onChangePassword = (value: string) => {
    this.password = value;
  };
  @action.bound
  onChangeConfirmPassword = (value: string) => {
    this.confirmPassword = value;
  };
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00aaff', '#bf80ff']}
        style={styles.container}>
        <Card>
          <ScrollView>
            <Header style={styles.header}>
              <Title>{i18n.t('authentication.signUpTitle')}</Title>
              <FormText>{i18n.t('authentication.signUpSubTitle')}</FormText>
            </Header>
            <Form>
              <NameDivision>
                <TextInput
                  type={'default'}
                  placeholder={i18n.t('authentication.firstName')}
                  secureTextEntry={false}
                  value={this.firstName}
                  onChange={this.onChangeFirstName}
                  inputStyle={styles.inputName}
                />
                <TextInput
                  type={'default'}
                  placeholder={i18n.t('authentication.lastName')}
                  secureTextEntry={false}
                  value={this.lastName}
                  onChange={this.onChangeLastName}
                  inputStyle={styles.inputName}
                />
              </NameDivision>
              <TextInput
                type={'numeric'}
                placeholder={i18n.t('authentication.mobileNumber')}
                secureTextEntry={false}
                value={this.mobileNumber}
                onChange={this.onChangeMobileNumber}
                inputStyle={styles.input}
              />
              <TextInput
                type={'email-address'}
                placeholder={i18n.t('authentication.email')}
                secureTextEntry={false}
                value={this.email}
                onChange={this.onChangeEmail}
                inputStyle={styles.input}
              />
              <TextInput
                type={'default'}
                placeholder={i18n.t('authentication.password')}
                secureTextEntry={true}
                value={this.password}
                onChange={this.onChangePassword}
                inputStyle={styles.input}
              />
              <TextInput
                type={'default'}
                placeholder={i18n.t('authentication.confirmPassword')}
                secureTextEntry={true}
                value={this.confirmPassword}
                onChange={this.onChangeConfirmPassword}
                inputStyle={styles.input}
              />
              <RadioButtons />
            </Form>
          </ScrollView>
        </Card>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 5,
    margin: 10,
    width: '100%',
  },
  inputName: {
    backgroundColor: '#f2f2f2',
    padding: 5,
    margin: 10,
    width: '47%',
  },
});
export default SignUpForm;
