import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Images,
  WIDTH,
  HEIGHT,
  MAIN_PADDING,
} from 'src/constants';

import {
  ImageIcon,
} from 'src/styles/common.styles';

const {
  AVATAR,
  ICON_VERIFY,
} = Images;

const ItemContainer = styled.View`
  padding-vertical: 10px;
  padding-horizontal: ${MAIN_PADDING}px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  background-color: white;
`;

const RowView = styled.View`
  flex-direction: row;
`;

const AvatarWrap = styled.View`
  width: ${HEIGHT * 0.08}px;
  aspect-ratio: 1;
  border-radius: ${HEIGHT * 0.04}px;
  overflow: hidden;
`;

const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const NameWrap = styled.View`
  width: 36%;
  flex-direction: row;
  align-items: center;
`;

const NameText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-right: 5px;
`;

const IdText = styled.Text`
  font-size: 16px;
  color: #717b85;
  margin-left: 5px;
`;

const TimeWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContentText = styled.Text`
  font-size: 18px;
  color: #717b85;
  margin-top: 5px;
`;

const MessageItem = ({
  avatar,
  userName,
  userId,
  isVerified,
  time,
  lastMessage,
}) => {
  return (
    <ItemContainer>
      <RowView>
        <AvatarWrap>
          <AvatarImage source={avatar || AVATAR} />
        </AvatarWrap>
        <ContentWrap>
          <TimeWrap>
            <NameWrap>
              <NameText numberOfLines={1}>{userName}</NameText>
              { isVerified && <ImageIcon source={ICON_VERIFY} size={18} /> }
              <IdText numberOfLines={1}>{userId}</IdText>
            </NameWrap>
            <IdText>{time}</IdText>
          </TimeWrap>
          <ContentText>{lastMessage}</ContentText>
        </ContentWrap>
      </RowView>
    </ItemContainer>
  );
}

MessageItem.propTypes = {
  avatar: PropTypes.number,
  userName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  time: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
};

MessageItem.defaultProps = {
  avatar: null,
  isVerified: false,
};

export default MessageItem;
