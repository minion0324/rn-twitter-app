import { Navigation } from 'react-native-navigation';

import {
  WIDTH,
} from 'src/constants';

import {
  HOME_SCREEN,
  SEARCH_SCREEN,
  NOTIFICATIONS_SCREEN,
  MESSAGES_SCREEN,
  DRAWER_SCREEN,
} from './Screens';

import registerScreens from './registerScreens';

registerScreens();

export function showDrawer(componentId) {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: true,
        width: WIDTH * 0.8,
      },
    }
  });
}

export function pushApp() {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false,
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysHide',
    },
    bottomTab: {
      iconInsets: { top: 5 },
    },
  });

  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: HOME_SCREEN,
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: require('src/assets/images/home.png'),
                      selectedIcon: require('src/assets/images/home-active.png'),
                      testID: 'FIRST_TAB_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SEARCH_SCREEN,
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: require('src/assets/images/search.png'),
                      selectedIcon: require('src/assets/images/search-active.png'),
                      testID: 'SECOND_TAB_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: NOTIFICATIONS_SCREEN,
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: require('src/assets/images/notifications.png'),
                      selectedIcon: require('src/assets/images/notifications-active.png'),
                      testID: 'THIRD_TAB_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: MESSAGES_SCREEN,
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: require('src/assets/images/messages.png'),
                      selectedIcon: require('src/assets/images/messages-active.png'),
                      testID: 'FOURTH_TAB_BAR_BUTTON',
                    },
                  },
                },
              },
            ],
          },
        },
        id: 'sideMenu',
        left: {
          component: {
            id: 'left.NavigationDrawer',
            name: DRAWER_SCREEN,
            passProps: {
              componentId: 'left.NavigationDrawer',
            },
          },
        },
      },
    },
  });
}
