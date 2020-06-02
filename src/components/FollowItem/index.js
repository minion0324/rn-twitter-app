import React from 'react';
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
  ICON_VERIFY,
  ICON_SPHERE,
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
  font-size: 18px;
  color: #717b85;
`;

const FollowWrap = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const ContentText = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

const FollowButton = styled.TouchableOpacity`
  margin-top: 5px;
  padding-vertical: 6px;
  padding-horizontal: 24px;
  border-color: #1da1f3;
  border-width: 1px;
  border-radius: 20px;
`;

const FollowText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #1da1f3;
`;

const SphereWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SphereIconWrap = styled.View`
  width: ${HEIGHT * 0.08}px;
  align-items: flex-end;
`;

const SphereText = styled.Text`
  font-size: 14px;
  color: #717b85;
  margin-left: 10px;
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
      {
        !!sphere &&
        <SphereWrap>
          <SphereIconWrap>
            <ImageIcon source={ICON_SPHERE} size={14} />
          </SphereIconWrap>
          <SphereText>{sphere}</SphereText>
        </SphereWrap>
      }
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
                { isVerified && <ImageIcon source={ICON_VERIFY} size={14} /> }
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
