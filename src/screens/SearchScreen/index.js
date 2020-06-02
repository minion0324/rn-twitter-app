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
  Body,
  SectionWrap,
  CircleButton,
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
  ICON_HAPPENING,
  AVATAR1,
  AVATAR2,
  AVATAR3,
} = Images;

const data = {
  first: {
    title: {
      image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000106/24a24af6-a2c6-4196-a964-51dff8a165d9-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
      title: 'With the rise of online shopping, making the move to an online store has countless benefits.',
      sphere: 'US news',
      time: 'LIVE',
      trending: '#dcprotest',
    },
    trendings: [
      {
        id: 0,
        title: 'COVID-19: Updates for the US',
        trending: '',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000120/8b2516bf-0807-4649-9495-f18237d82c7c-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'COVID-19',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
        tweets: '',
      },
      {
        id: 1,
        title: 'A designer theme or template? What can you do without?',
        trending: 'United States',
        tweets: '38.4K',
      },
      {
        id: 2,
        title: 'Our reviews and analyses pick through all of the most important aspects of e-commerce website builders to make your choice as simple and stress-free as possible.',
        trending: 'United States',
        tweets: '37.7K',
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        trending: 'Antifa',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
          id: 'COVID-19',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: false,
        },
        tweets: '',
      },
      {
        id: 4,
        title: 'With the rise of online shopping, making the move to an online store has countless benefits.',
        trending: 'California',
        tweets: '29.4K',
      },
      {
        id: 5,
        title: 'But the sheer quantity of options for launching a website can be overwhelming.',
        trending: 'United States',
        tweets: '5,363',
      },
      {
        id: 6,
        title: 'Do you have a particular model in mind? Must-have features?',
        trending: 'Antifa',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
        tweets: '',
      },
    ],

  },
  second: {
    trendings: [
      {
        id: 0,
        title: 'Designer',
        trendingNumber: 1,
        tweets: '12.4K',
      },
      {
        id: 1,
        title: 'Template',
        trendingNumber: 2,
        tweets: '27.9K',
      },
      {
        id: 2,
        title: 'Experience',
        trendingNumber: 3,
        tweets: '17.8K',
      },
      {
        id: 3,
        title: 'E-Commerce',
        trendingNumber: 4,
        tweets: '15.7K',
      },
      {
        id: 4,
        title: 'Together',
        trendingNumber: 5,
        tweets: '2.9K',
      },
      {
        id: 5,
        title: 'Designer',
        trendingNumber: 6,
        tweets: '12.4K',
      },
      {
        id: 6,
        title: 'Template',
        trendingNumber: 7,
        tweets: '27.9K',
      },
      {
        id: 7,
        title: 'Experience',
        trendingNumber: 8,
        tweets: '17.8K',
      },
      {
        id: 8,
        title: 'E-Commerce',
        trendingNumber: 9,
        tweets: '15.7K',
      },
      {
        id: 9,
        title: 'Together',
        trendingNumber: 10,
        tweets: '2.9K',
      },
    ],
  },
  third: {
    title: {
      image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000106/24a24af6-a2c6-4196-a964-51dff8a165d9-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
      title: 'With the rise of online shopping, making the move to an online store has countless benefits.',
      sphere: 'US news',
      time: 'LIVE',
      badge: true,
      trending: '#dcprotest',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000120/8b2516bf-0807-4649-9495-f18237d82c7c-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 1,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
      + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 2,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 4,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 5,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
    ],
  },
  fourth: {
    title: {
      image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
      title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
      sphere: 'Football',
      time: 'This afternoon',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000120/8b2516bf-0807-4649-9495-f18237d82c7c-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 1,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
      + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 2,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 4,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 5,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
    ],
  },
  fifth: {
    title: {
      image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
      title: 'Do you have a particular model in mind? Must-have features?',
      sphere: 'Animals',
      time: 'May 30, 2020',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000120/8b2516bf-0807-4649-9495-f18237d82c7c-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 1,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
      + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'Yesterday',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 2,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 3,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
      {
        id: 4,
        title: 'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
          id: 'Elemental',
          time: 'Last night',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
      {
        id: 5,
        title: 'Do you have a particular model in mind? Must-have features?',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000002/9dc8b663-d35b-4ae0-a25d-aa585274cd94-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: 'May 30, 2020',
          avatar: AVATAR1,
          isVerified: true,
        },
      },
    ],
  },
  sixth: {
    title: {
      image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000195/7a670ed5-9a47-4364-ae2a-ab86bc944eb9-023fcb09cba6b5cdee53afe90e810f4b.jpg',
      title: 'Do you have a particular model in mind? Must-have features?',
      sphere: 'Animals',
      time: 'May 30, 2020',
    },
    trendings: [
      {
        id: 0,
        title: 'Before you dive in, make sure to think about the kind of website you’d like for your business.',
        authorInfo: {
          image: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000120/8b2516bf-0807-4649-9495-f18237d82c7c-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
          id: 'US news',
          time: '1h',
          avatar: AVATAR1,
          isVerified: false,
        },
      },
    ],
  },
}

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

  renderScene = ({ route }) => {
    const sceneData = data[route.key];

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
