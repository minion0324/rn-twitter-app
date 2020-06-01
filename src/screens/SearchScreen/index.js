import React, { useState, useRef } from 'react';
import {
  View,
  TouchableWithoutFeedback,
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
} from 'src/styles/common.styles';
import {
  TabBarStyle,
  TabBarIndicatorStyle,
  TabBarLabelStyle,
  TabBarTabStyle,
  TabBarActiveColor,
  TabBarInactiveColor,
} from 'src/styles/tab.styles';
import {
  SearchBar,
  SearchText,
  SearchInput,
  CancelText,
} from './styled';

const {
  ICON_SETTINGS,
  ERIN,
} = Images;

const SearchScreen = ({ componentId }) => {
  const [ searchActive, setSearchActive ] = useState(false);
  const [ index, setIndex ] =useState(0);
  const [ routes ] = useState([
    { key: 'first', title: 'For you' },
    { key: 'second', title: 'Trending' },
    { key: 'third', title: 'News' },
    { key: 'fourth', title: 'Sports' },
    { key: 'fifth', title: 'Fun' },
    { key: 'sixth', title: 'Entertainment' },
  ]);

  const refInput = useRef();

  activeSearch = () => {
    setSearchActive(true);
  }

  deactiveSearch = () => {
    if (!searchActive) return;

    setSearchActive(false);
    refInput.current.blur();
  }

  renderSearchBar = () => {
    return (
      <TouchableWithoutFeedback
        onPress={activeSearch}
      >
        <SearchBar>
          {
            searchActive
            ? <SearchInput
                ref={refInput}
                autoFocus
                placeholder={'Search Twitter'}
                placeholderTextColor={'#657688'}
                underlineColorAndroid={'transparent'}
              />
            : <SearchText>Search Twitter</SearchText>
          }
        </SearchBar>
      </TouchableWithoutFeedback>
    );
  };

  renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        getLabelText={({ route }) => route.title}
        style={TabBarStyle}
        indicatorStyle={TabBarIndicatorStyle}
        labelStyle={TabBarLabelStyle}
        tabStyle={TabBarTabStyle}
        activeColor={TabBarActiveColor}
        inactiveColor={TabBarInactiveColor}
        scrollEnabled={true}
      />
    );
  };

  return (
    <Container>
      <Header
        centerIcon={renderSearchBar()}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        emptyLeft={searchActive}
        rightIcon={
          searchActive
          ? <CancelText>Cancel</CancelText>
          : <ImageIcon source={ICON_SETTINGS} />
        }
        onPressRight={deactiveSearch}
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
        swipeEnabled
        useNativeDriver
      />
    </Container>
  );
};

SearchScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default SearchScreen;
