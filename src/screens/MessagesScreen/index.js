import React, { useState, useRef } from 'react';
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  Header,
  ListContainer,
  MessageItem,
  FullAlert,
} from 'src/components';
import {
  Images,
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
  SearchBar,
  SearchText,
  SearchInput,
  CancelText,
} from 'src/styles/common.styles';
import {
  SearchWrap,
} from './styled';

const {
  ICON_SETTINGS,
  ERIN,
  ICON_NEW_MESSAGE,
} = Images;

const {
  dummyMessages,
} = DummyData;

const MessagesScreen = ({ componentId }) => {
  const [ searchActive, setSearchActive ] = useState(false);

  const refInput = useRef();

  const activeSearch = () => {
    setSearchActive(true);
  }

  const deactiveSearch = () => {
    if (!searchActive) return;

    setSearchActive(false);
    refInput.current.blur();
  }

  return (
    <Container>
      <Header
        title={'Messages'}
        centerIcon={
          searchActive &&
          <SearchBar>
            <SearchInput
              ref={refInput}
              autoFocus
              placeholder={'Search for people and groups'}
              placeholderTextColor={'#657688'}
              underlineColorAndroid={'transparent'}
            />
          </SearchBar>
        }
        avatar={ERIN}
        emptyLeft={searchActive}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={
          searchActive
          ? <CancelText>Cancel</CancelText>
          : <ImageIcon source={ICON_SETTINGS} size={25} />
        }
        onPressRight={deactiveSearch}
        hasBorder={searchActive}
      />

      <Body>
        {
          !searchActive &&
          <SearchWrap>
            <TouchableWithoutFeedback
              onPress={activeSearch}
            >
              <SearchBar>
                <SearchText>Search for people and groups</SearchText>
              </SearchBar>
            </TouchableWithoutFeedback>
          </SearchWrap>
        }

        <ListContainer>
          <FlatList
            data={dummyMessages}
            keyExtractor={item => item.userId}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <MessageItem
                  avatar={item.avatar}
                  userName={item.userName}
                  userId={item.userId}
                  isVerified={item.isVerified}
                  time={item.time}
                  lastMessage={item.lastMessage}
                />
              </TouchableOpacity>
            )}
          />
        </ListContainer>

        {
          !dummyMessages.length &&
          <FullAlert
            title={'Send a message, get a message'}
            subTitle={
              'Direct Messages are private conversations between you and other people on Twitter.'
              + ' Share Tweets, media, and more!'
            }
            buttonText={'Write a message'}
          />
        }
      </Body>

      <CircleButton>
        <ImageIcon source={ICON_NEW_MESSAGE} size={22} />
      </CircleButton>
    </Container>
  );
};

MessagesScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default MessagesScreen;
