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
  ARROW,
  ICON_REPLY,
  ICON_RETWEET,
  ICON_HEART,
  ICON_SHARE,
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

const ArrowWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContentText = styled.Text`
  font-size: 18px;
  margin-top: 5px;
`;

const ToolWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const ToolView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ToolText = styled.Text`
  width: 50px;
  font-size: 16px;
  color: #717b85;
  margin-horizontal: 5px;
`;

const BorderWrap = styled.TouchableOpacity`
  margin-top: 10px;
  border-width: 1px;
  border-color: #f2f2f2;
  overflow: hidden;
`;

const RoundWrap = styled(BorderWrap)`
  border-radius: 20px;
  overflow: hidden;
`;

const RepliedInnerWrap = styled.View`
  padding: 10px;
`;

const RepliedAvatarWrap = styled.View`
  width: 24px;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 10px;
`;

const ThreadWrap = styled.TouchableOpacity`
  margin-top: 10px;
`;

const ThreadText = styled.Text`
  font-size: 18px;
  color: #1da1f3;
`;

const ContentImageWrap = styled.View`
  margin-top: 10px;
  border-width: 1px;
  border-color: #f2f2f2;
  border-radius: 20px;
  overflow: hidden;
`;

const ContentImage = styled.Image`
  width: 100%;
  aspect-ratio: ${props => props.aspectRatio || 2};
`;

const NewsItem = ({
  avatar,
  authorName,
  authorId,
  isVerified,
  sphere,
  time,
  contentText,
  contentImage,
  contentReplied,
  countReply,
  countRetweet,
  countHeart,
  aspectRatio,
}) => {
  return (
    <ItemContainer>
      <RowView>
        <AvatarWrap>
          <AvatarImage source={avatar || AVATAR} />
        </AvatarWrap>
        <ContentWrap>
          <ArrowWrap>
            <NameWrap>
              <NameText numberOfLines={1}>{authorName}</NameText>
              { isVerified && <ImageIcon source={ICON_VERIFY} size={18} /> }
              <IdText numberOfLines={1}>{authorId}</IdText>
              <IdText>{`• ${time}`}</IdText>
            </NameWrap>
            <ImageIcon source={ARROW} size={18} />
          </ArrowWrap>
          {
            !!contentText &&
            <ContentText>{contentText}</ContentText>
          }

          {
            !!contentImage &&
            <RoundWrap>
              <ContentImage
                aspectRatio={aspectRatio}
                source={{ uri: contentImage }}
              />
            </RoundWrap>
          }

          {
            contentReplied &&
            <RoundWrap>
              <RepliedInnerWrap>
                <NameWrap>
                  <RepliedAvatarWrap>
                    <AvatarImage source={contentReplied.avatar || AVATAR} />
                  </RepliedAvatarWrap>
                  <NameText numberOfLines={1}>{contentReplied.authorName}</NameText>
                  {
                    contentReplied.isVerified &&
                    <ImageIcon source={ICON_VERIFY} size={18} />
                  }
                  <IdText numberOfLines={1}>{contentReplied.authorId}</IdText>
                  <IdText>{`• ${contentReplied.time}`}</IdText>
                </NameWrap>
                {
                  !!contentReplied.contentText &&
                  <ContentText>{contentReplied.contentText}</ContentText>
                }
                <ThreadWrap>
                  <ThreadText>Show this thread</ThreadText>
                </ThreadWrap>
              </RepliedInnerWrap>
              {
                !!contentReplied.contentImage &&
                <BorderWrap>
                  <ContentImage source={{ uri: contentReplied.contentImage }} />
                </BorderWrap>
              }

            </RoundWrap>
          }

          <ToolWrap>
            <ToolView>
              <ImageIcon source={ICON_REPLY} size={15} />
              <ToolText numberOfLines={1}>{countReply}</ToolText>
            </ToolView>
            <ToolView>
              <ImageIcon source={ICON_RETWEET} size={20} />
              <ToolText numberOfLines={1}>{countRetweet}</ToolText>
            </ToolView>
            <ToolView>
              <ImageIcon source={ICON_HEART} size={15} />
              <ToolText numberOfLines={1}>{countHeart}</ToolText>
            </ToolView>
            <ToolView>
              <ImageIcon source={ICON_SHARE} size={15} />
              <ToolText numberOfLines={1}></ToolText>
            </ToolView>
          </ToolWrap>
        </ContentWrap>
      </RowView>
    </ItemContainer>
  );
}

NewsItem.propTypes = {
  avatar: PropTypes.number,
  authorName: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  sphere: PropTypes.string,
  time: PropTypes.string.isRequired,
  contentText: PropTypes.string,
  contentImage: PropTypes.string,
  contentReplied: PropTypes.object,
  countReply: PropTypes.string,
  countRetweet: PropTypes.string,
  countHeart: PropTypes.string,
  aspectRatio: PropTypes.number,
};

NewsItem.defaultProps = {
  avatar: null,
  isVerified: false,
  sphere: '',
  contentText: '',
  contentImage: '',
  contentReplied: null,
  countReply: '0',
  countRetweet: '0',
  countHeart: '0',
  aspectRatio: 2,
};

export default NewsItem;
