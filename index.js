/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import test from './app/root';

AppRegistry.registerComponent(appName, () => test);
