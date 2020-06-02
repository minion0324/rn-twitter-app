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
  padding-vertical: 10px;
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
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  color: #717b85;
  margin-top: 3px;
`;

const TitleWrap = styled.View`

`;

const RightIcon = styled.TouchableOpacity`

`;

const TopBar = ({
  title,
  subTitle,
  leftIcon,
  onPressLeft,
  rightIcon,
  onPressRight,
}) => {
  return (
    <ItemContainer>
      <LeftWrap>
        {leftIcon && <LeftIcon onPress={onPressLeft}>{leftIcon}</LeftIcon>}
        <TitleWrap>
          <Title>{title}</Title>
          {!!subTitle && <SubTitle>{subTitle}</SubTitle>}
        </TitleWrap>
      </LeftWrap>
      {rightIcon && <RightIcon onPress={onPressRight}>{rightIcon}</RightIcon>}
    </ItemContainer>
  );
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  leftIcon: PropTypes.object,
  onPressLeft: PropTypes.func,
  rightIcon: PropTypes.object,
  onPressRight: PropTypes.func,
};

TopBar.defaultProps = {
  subTitle: '',
  leftIcon: null,
  onPressLeft: null,
  rightIcon: null,
  onPressRight: null,
};

export default TopBar;
