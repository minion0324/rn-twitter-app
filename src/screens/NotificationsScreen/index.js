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
  ICON_SETTINGS,
  ERIN,
} = Images;

const NotificationsScreen = ({ componentId }) => {
  return (
    <Container>
      <Header
        title={'Notifications'}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={<ImageIcon source={ICON_SETTINGS} />}
        hasBorder
      />

    </Container>
  );
};

NotificationsScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default NotificationsScreen;
