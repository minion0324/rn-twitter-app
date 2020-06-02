import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Images,
  HEIGHT,
  MAIN_PADDING,
} from 'src/constants';

import {
  ImageIcon,
} from 'src/styles/common.styles';

const {
  AVATAR,
  ICON_STAR,
  ARROW,
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

const IconWrap = styled.View`
  width: ${HEIGHT * 0.08}px;
  align-items: flex-end;
`;

const AvatarWrap = styled.View`
  width: 45px;
  aspect-ratio: 1;
  border-radius: 23px;
  overflow: hidden;
  margin-right: 5px;
`;

const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const ArrowWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 18px;
  margin-top: 10px;
`;

const Description = styled.Text`
  font-size: 18px;
  color: #717b85;
  margin-top: 5px;
`;

const NotificationItem = ({
  avatars,
  title,
  description,
}) => {
  return (
    <ItemContainer>
      <RowView>
        <IconWrap>
          <ImageIcon source={ICON_STAR} />
        </IconWrap>
        <ContentWrap>
          <ArrowWrap>
            <RowView>
              {
                avatars.map(avatar => (
                  <AvatarWrap key={avatar}>
                    <AvatarImage source={avatar || AVATAR} />
                  </AvatarWrap>
                ))
              }
            </RowView>
            <ImageIcon source={ARROW} size={18} />
          </ArrowWrap>
          <Title>{title}</Title>
          <Description numberOfLines={4}>{description}</Description>
        </ContentWrap>
      </RowView>
    </ItemContainer>
  );
}

NotificationItem.propTypes = {
  avatars: PropTypes.array,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

NotificationItem.defaultProps = {
  avatars: [],
  description: '',
};

export default NotificationItem;
