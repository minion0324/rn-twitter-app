import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { TabView, TabBar } from 'react-native-tab-view';

import {
  Header,
} from 'src/components';
import {
  Images,
  WIDTH,
  HEIGHT,
} from 'src/constants';
import {
  showDrawer,
} from 'src/navigation';

import {
  Container,
  ImageIcon,
  CircleButton,
} from 'src/styles/common.styles';
import {
  TabBarStyle,
  TabBarIndicatorStyle,
  TabBarLabelStyle,
  TabBarTabFullWidthStyle,
  TabBarActiveColor,
  TabBarInactiveColor,
} from 'src/styles/tab.styles';

const {
  ICON_SETTINGS,
  ERIN,
  ICON_HAPPENING,
} = Images;

const NotificationsScreen = ({ componentId }) => {
  const [ index, setIndex ] =useState(0);
  const [ routes ] = useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Mentions' },
  ]);

  renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        getLabelText={({ route }) => route.title}
        style={TabBarStyle}
        indicatorStyle={TabBarIndicatorStyle}
        labelStyle={TabBarLabelStyle}
        tabStyle={TabBarTabFullWidthStyle}
        activeColor={TabBarActiveColor}
        inactiveColor={TabBarInactiveColor}
      />
    );
  };

  return (
    <Container>
      <Header
        title={'Notifications'}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={<ImageIcon source={ICON_SETTINGS} />}
      />

      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route }) => (
          <View style={{flex: 1}} />
        )}
        renderTabBar={renderTabBar}
        onIndexChange={idx => setIndex(idx)}
        initialLayout={{
          width: WIDTH,
          height: HEIGHT,
        }}
        useNativeDriver
      />

      <CircleButton>
        <ImageIcon source={ICON_HAPPENING} />
      </CircleButton>
    </Container>
  );
};

NotificationsScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default NotificationsScreen;
