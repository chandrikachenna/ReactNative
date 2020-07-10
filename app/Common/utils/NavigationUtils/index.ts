import {Actions} from 'react-native-router-flux';
import {APP_LAUNCH_SCENE, APP_SCENE} from '../../constants/NavigationConstants';

export function goToLaunchScene(props = {}) {
  Actions.push(APP_LAUNCH_SCENE, props);
}

export function goToAppScene(props = {}) {
  Actions.push(APP_SCENE, props);
}
export function goToMainScene(props = {}) {
  Actions.push(APP_LAUNCH_SCENE, props);
}
