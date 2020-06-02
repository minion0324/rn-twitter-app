import React, { useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { TabView, TabBar } from 'react-native-tab-view';

import {
  Header,
  ListContainer,
  ImageTitle,
  TrendingItem,
  TopBar,
  BottomBar,
  ExpandItem,
  NewsItem,
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
  SectionWrap,
  CircleButton,
  SearchBar,
  SearchText,
  SearchInput,
  CancelText,
} from 'src/styles/common.styles';
import {
  TabBarStyle,
  TabBarIndicatorStyle,
  TabBarLabelStyle,
  TabBarTabStyle,
  TabBarActiveColor,
  TabBarInactiveColor,
} from 'src/styles/tab.styles';

const {
  ICON_SETTINGS,
  ERIN,
  ICON_HAPPENING,
  ICON_ALERT,
  ARROW,
  ARROW_RIGHT,
} = Images;

const {
  dummyTabs,
  dummySearch,
} = DummyData;

const SearchScreen = ({ componentId }) => {
  const [ searchActive, setSearchActive ] = useState(false);
  const [ index, setIndex ] =useState(0);
  const [ routes ] = useState(dummyTabs);

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

  renderScene = ({ route }) => {
    const sceneData = dummySearch[route.key];

    return (
      <Body>
        <ListContainer>
          {
            sceneData && sceneData.title &&
            <SectionWrap>
              <TouchableOpacity>
                <ImageTitle
                  image={sceneData.title.image}
                  title={sceneData.title.title}
                  sphere={sceneData.title.sphere}
                  time={sceneData.title.time}
                  badge={sceneData.title.badge}
                  trending={sceneData.title.trending}
                />
              </TouchableOpacity>
            </SectionWrap>
          }

          {
            sceneData &&
            sceneData.trendings &&
            sceneData.trendings.length > 0 &&
            <SectionWrap>
              {
                sceneData.trendings.map(item => (
                  <TouchableOpacity key={item.id}>
                    <TrendingItem
                      title={item.title}
                      trending={item.trending}
                      trendingNumber={item.trendingNumber}
                      authorInfo={item.authorInfo}
                      tweets={item.tweets}
                    />
                  </TouchableOpacity>
                ))
              }
            </SectionWrap>
          }

          {
            sceneData &&
            sceneData.followings &&
            sceneData.followings.length > 0 &&
            sceneData.followings.map(following => (
              <SectionWrap key={following.title}>
                <TopBar
                  title={following.title}
                  leftIcon={<ImageIcon source={ICON_ALERT} />}
                  rightIcon={<ImageIcon source={ARROW} size={18} />}
                />
                {
                  following.news.map((item) => (
                    <NewsItem
                      key={item.id}
                      avatar={item.avatar}
                      authorName={item.authorName}
                      authorId={item.authorId}
                      isVerified={item.isVerified}
                      time={item.time}
                      contentText={item.contentText}
                      contentImage={item.contentImage}
                      contentReplied={item.contentReplied}
                      countReply={item.countReply}
                      countRetweet={item.countRetweet}
                      countHeart={item.countHeart}
                      aspectRatio={item.aspectRatio}
                    />
                  ))
                }
                <ExpandItem
                  title={following.title}
                  leftIcon={<ImageIcon source={ICON_ALERT} />}
                  followText={'Following'}
                />
                <TouchableOpacity>
                  <BottomBar
                    title={'Show more'}
                    rightIcon={<ImageIcon source={ARROW_RIGHT} size={18} />}
                  />
                </TouchableOpacity>
              </SectionWrap>
            ))
          }
        </ListContainer>
      </Body>
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
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={idx => setIndex(idx)}
        initialLayout={{
          width: WIDTH,
          height: HEIGHT,
        }}
        swipeEnabled
        useNativeDriver
      />

      <CircleButton>
        <ImageIcon source={ICON_HAPPENING} />
      </CircleButton>
    </Container>
  );
};

SearchScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default SearchScreen;
