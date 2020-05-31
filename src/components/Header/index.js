import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Images,
  MAIN_PADDING,
} from 'src/constants';

const { AVATAR } = Images;

const Container = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${MAIN_PADDING}px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.hasBorder ? '#f2f2f2' : 'transparent')};
  background-color: white;
`;

const LeftWrap = styled.TouchableOpacity`
  width: 45px;
`;

const CenterWrap = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-horizontal: ${MAIN_PADDING}px;
`;

const RightWrap = styled.TouchableOpacity`
  width: 45px;
  align-items: flex-end;
`;

const AvatarWrap = styled.View`
  width: 45px;
  aspect-ratio: 1;
  border-radius: 18px;
  overflow: hidden;
`;

const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const Header = ({
  title,
  centerIcon,
  avatar,
  leftIcon,
  onPressLeft,
  rightIcon,
  onPressRight,
  hasBorder,
}) => {
  return (
    <Container hasBorder={hasBorder}>
      <LeftWrap onPress={onPressLeft}>
        {
          !!leftIcon
          ? leftIcon
          : <AvatarWrap>
              <AvatarImage source={avatar || AVATAR} />
            </AvatarWrap>
        }
      </LeftWrap>
      <CenterWrap>
      {
        !!centerIcon
        ? centerIcon
        : !!title && <Title>{title}</Title>
      }
      </CenterWrap>
      <RightWrap onPress={onPressRight}>
        {!!rightIcon && rightIcon}
      </RightWrap>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  centerIcon: PropTypes.node,
  avatar: PropTypes.number,
  leftIcon: PropTypes.node,
  onPressLeft: PropTypes.func,
  rightIcon: PropTypes.node,
  onPressRight: PropTypes.func,
  hasBorder: PropTypes.bool,
};

Header.defaultProps = {
  title: '',
  centerIcon: null,
  leftIcon: null,
  avatar: '',
  onPressLeft: null,
  rightIcon: null,
  onPressRight: null,
  hasBorder: false,
};


export default Header;
