import React, { useState, useRef } from 'react';
import {
  TextInput,
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
} from 'src/styles/common.styles';
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
  }

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
        hasBorder
      />

    </Container>
  );
};

SearchScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default SearchScreen;
