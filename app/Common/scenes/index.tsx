import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  MAIN_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import {HomePage} from '../components/HomePage';
import {SIGNUP_SCENE} from '../../Authentication/constants/NavigationConstants';
import {SignUpForm} from '../../Authentication/components/SignUpForm';

const scenes = [
  <Scene initial key={SIGNUP_SCENE} component={SignUpForm} />,
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} back />,
  <Scene key={APP_SCENE} component={AppScene} back />,
  <Scene key={MAIN_SCENE} component={HomePage} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
