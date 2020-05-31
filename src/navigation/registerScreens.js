import {Navigation} from 'react-native-navigation';

import {
  HomeScreen,
  SearchScreen,
  NotificationsScreen,
  MessagesScreen,
  DrawerScreen,
} from 'src/screens';

import {
  HOME_SCREEN,
  SEARCH_SCREEN,
  NOTIFICATIONS_SCREEN,
  MESSAGES_SCREEN,
  DRAWER_SCREEN,
} from './Screens';

export default function () {
  Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
  Navigation.registerComponent(SEARCH_SCREEN, () => SearchScreen);
  Navigation.registerComponent(NOTIFICATIONS_SCREEN, () => NotificationsScreen);
  Navigation.registerComponent(MESSAGES_SCREEN, () => MessagesScreen);
  Navigation.registerComponent(DRAWER_SCREEN, () => DrawerScreen);
}
