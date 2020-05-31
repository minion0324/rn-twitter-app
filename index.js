import { Navigation } from 'react-native-navigation';

import  { pushApp } from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => {
  pushApp();
});
