import React from 'react';
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

const {
  TWITTER_LOGO,
  ICON_STARS,
  ERIN,
} = Images;

const HomeScreen = ({ componentId }) => {
  return (
    <Container>
      <Header
        centerIcon={<ImageIcon source={TWITTER_LOGO} />}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={<ImageIcon source={ICON_STARS} />}
        hasBorder
      />

    </Container>
  );
};

HomeScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default HomeScreen;
