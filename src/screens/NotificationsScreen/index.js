import React, { useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { TabView, TabBar } from 'react-native-tab-view';

import {
  Header,
  FullAlert,
  ListContainer,
  NotificationItem,
} from 'src/components';
import {
  Images,
  WIDTH,
  HEIGHT,
  DummyData,
} from 'src/constants';
import {
  showDrawer,
} from 'src/navigation';

import {
  Container,
  ImageIcon,
  Body,
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

const {
  dummyNotifications,
} = DummyData;

const NotificationsScreen = ({ componentId }) => {
  const [ index, setIndex ] =useState(0);
  const [ routes ] = useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Mentions' },
  ]);

  const renderTabBar = (props) => {
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

  const renderScene = ({ route }) => {
    const sceneData = dummyNotifications[route.key];

    return (
      <Body>
        <ListContainer>
          <FlatList
            data={sceneData}
            keyExtractor={item => (`${item.id}`)}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <NotificationItem
                  avatars={item.avatars}
                  title={item.title}
                  description={item.description}
                />
              </TouchableOpacity>
            )}
          />
        </ListContainer>

        {
          !sceneData.length &&
          <FullAlert
            title={'Nothing to see here -- yet.'}
            subTitle={'When someone mentions you in a Tweet, you\'ll see it here.'}
          />
        }
      </Body>
    );
  }

  return (
    <Container>
      <Header
        title={'Notifications'}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={<ImageIcon source={ICON_SETTINGS} size={25} />}
      />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={idx => setIndex(idx)}
        initialLayout={{
          width: WIDTH,
          height: HEIGHT,
        }}
        useNativeDriver
      />

      <CircleButton>
        <ImageIcon source={ICON_HAPPENING} size={25} />
      </CircleButton>
    </Container>
  );
};

NotificationsScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default NotificationsScreen;
