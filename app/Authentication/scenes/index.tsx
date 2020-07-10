import React from 'react';
import {Scene} from 'react-native-router-flux';

import {SIGNUP_SCENE} from '../constants/NavigationConstants';
import {SignUpForm} from '../components/SignUpForm';

const scenes = [<Scene key={SIGNUP_SCENE} component={SignUpForm} />];

const modalScenes: any = [];

export {scenes as default, modalScenes};
