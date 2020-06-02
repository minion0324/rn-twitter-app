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
  flex-direction: row;
  align-items: center;
`;

const IdWrap = styled.View`
  width: 60%;
`;

const NameText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-right: 5px;
`;

const IdText = styled.Text`
  font-size: 16px;
  color: #717b85;
`;

const FollowWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContentText = styled.Text`
  font-size: 18px;
  margin-top: 5px;
`;

const FollowButton = styled.TouchableOpacity`
  padding-vertical: 5px;
  padding-horizontal: 20px;
  border-color: #1da1f3;
  border-width: 1px;
  border-radius: 20px;
`;

const FollowText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #1da1f3;
`;

const FollowItem = ({
  avatar,
  authorName,
  authorId,
  isVerified,
  sphere,
  contentText,
}) => {
  return (
    <ItemContainer>
      <RowView>
        <AvatarWrap>
          <AvatarImage source={avatar || AVATAR} />
        </AvatarWrap>
        <ContentWrap>
          <FollowWrap>
            <IdWrap>
              <NameWrap>
                <NameText numberOfLines={1}>
                  {authorName}
                </NameText>
                { isVerified && <ImageIcon source={ICON_VERIFY} size={18} /> }
              </NameWrap>
              <IdText numberOfLines={1}>{authorId}</IdText>
            </IdWrap>
            <FollowButton>
              <FollowText>Follow</FollowText>
            </FollowButton>
          </FollowWrap>
          {
            !!contentText &&
            <ContentText>{contentText}</ContentText>
          }

        </ContentWrap>
      </RowView>
    </ItemContainer>
  );
}

FollowItem.propTypes = {
  avatar: PropTypes.number,
  authorName: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  sphere: PropTypes.string,
  contentText: PropTypes.string,
};

FollowItem.defaultProps = {
  avatar: null,
  isVerified: false,
  sphere: '',
  contentText: '',
};

export default FollowItem;
