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
  CircleButton,
} from 'src/styles/common.styles';

const {
  ICON_SETTINGS,
  ERIN,
  ICON_HAPPENING,
  ICON_NEW_MESSAGE,
} = Images;

const MessagesScreen = ({ componentId }) => {
  return (
    <Container>
      <Header
        title={'Messages'}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={<ImageIcon source={ICON_SETTINGS} />}
        hasBorder
      />

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
