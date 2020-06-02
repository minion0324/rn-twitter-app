import React from 'react';
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

const LeftWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftIcon = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const FollowButton = styled.TouchableOpacity`
  padding-vertical: 6px;
  padding-horizontal: 24px;
  border-color: #1da1f3;
  border-width: 1px;
  border-radius: 20px;
  background-color: ${props => (props.isFollow ? 'white' : '#1da1f3')};
`;

const FollowText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isFollow ? '#1da1f3' : 'white')};
`;

const ExpandItem = ({
  title,
  leftIcon,
  followText,
}) => {
  return (
    <ItemContainer>
      <LeftWrap>
        {
          leftIcon
          && <LeftIcon>{leftIcon}</LeftIcon>
        }
        <Title>{title}</Title>
      </LeftWrap>
      <FollowButton
        isFollow={followText === 'Follow'}
      >
        <FollowText
          isFollow={followText === 'Follow'}
        >
          {followText}
        </FollowText>
      </FollowButton>
    </ItemContainer>
  );
}

ExpandItem.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.object,
  followText: PropTypes.string,
};

ExpandItem.defaultProps = {
  leftIcon: null,
  followText: 'Follow',
};

export default ExpandItem;
