import React, { useState, useRef } from 'react';
import {
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  Header,
} from 'src/components';
import {
  Images,
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
  ICON_HAPPENING,
  ICON_NEW_MESSAGE,
} = Images;

const MessagesScreen = ({ componentId }) => {
  const [ searchActive, setSearchActive ] = useState(false);

  const refInput = useRef();

  activeSearch = () => {
    setSearchActive(true);
  }

  deactiveSearch = () => {
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
          : <ImageIcon source={ICON_SETTINGS} />
        }
        onPressRight={deactiveSearch}
        hasBorder={searchActive}
      />

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

      <Body>
      </Body>

      <CircleButton>
        <ImageIcon source={ICON_NEW_MESSAGE} />
      </CircleButton>
    </Container>
  );
};

MessagesScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default MessagesScreen;
