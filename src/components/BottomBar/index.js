import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  MAIN_PADDING,
} from 'src/constants';

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 15px;
  padding-horizontal: ${MAIN_PADDING}px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #1da1f3
`;

const BottomBar = ({
  title,
  rightIcon,
}) => {
  return (
    <ItemContainer>
      <Title>{title}</Title>
      {rightIcon && rightIcon}
    </ItemContainer>
  );
}

BottomBar.propTypes = {
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.object,
};

BottomBar.defaultProps = {
  rightIcon: null,
};

export default BottomBar;
