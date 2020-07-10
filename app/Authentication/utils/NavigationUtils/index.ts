import {Actions} from 'react-native-router-flux';
import {SIGNUP_SCENE} from '../../constants/NavigationConstants';

export function goToSignUpScene(props = {}) {
  Actions.push(SIGNUP_SCENE, props);
}
