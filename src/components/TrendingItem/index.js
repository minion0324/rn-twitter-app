import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Images,
  WIDTH,
  MAIN_PADDING,
} from 'src/constants';

import {
  ImageIcon,
} from 'src/styles/common.styles';

const {
  ARROW,
  ICON_VERIFY,
} = Images;

const ItemContainer = styled.View`
  padding-vertical: 15px;
  padding-horizontal: ${MAIN_PADDING}px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;

const RowWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ImageWrap = styled.View`
  width: ${WIDTH * 0.2}px;
  border-width: 1px;
  border-color: #f2f2f2;
  border-radius: 20px;
  overflow: hidden;
`;

const ContentWrap = styled.View`
  width: ${WIDTH * 0.66}px;
`;

const Image = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const AuthorWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NameText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

const IdText = styled.Text`
  font-size: 14px;
  color: #717b85;
`;

const AvatarWrap = styled.View`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 5px;
`;

const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const IconWrap = styled.View`
  padding-left: 5px;
`;

const TimeText = styled.Text`
  font-size: 14px;
  color: #717b85;
  padding-left: 5px;
`;

const TrendingText = styled.Text`
  font-size: 14px;
  color: #717b85;
`;

const TrendingWrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const TrendingContentText = styled(TrendingText)`
  font-size: 14px;
  color: #1da1f3;
`;

const TweetsText = styled.Text`
  font-size: 14px;
  color: #717b85;
`;

const TrendingItem = ({
  title,
  trending,
  trendingNumber,
  authorInfo,
  tweets,
}) => {

  renderAuthor = () => {
    return (
      <AuthorWrap>
        {
          authorInfo.isVerified && authorInfo.avatar &&
          <AvatarWrap>
            <AvatarImage source={authorInfo.avatar} />
          </AvatarWrap>
        }
        {
          authorInfo.isVerified
          ? <NameText>{authorInfo.id}</NameText>
          : <IdText>{authorInfo.id}</IdText>
        }
        {
          authorInfo.isVerified &&
          <IconWrap>
            <ImageIcon source={ICON_VERIFY} size={10} />
          </IconWrap>
        }
        {
          authorInfo.time &&
          <TimeText>{`• ${authorInfo.time}`}</TimeText>
        }
      </AuthorWrap>
    );
  };

  return (
    <ItemContainer>
      {
        authorInfo
        ? authorInfo.image
          ? <RowWrap>
              <ContentWrap>
                {renderAuthor()}
                <Title numberOfLines={3}>{title}</Title>
                {
                  !!trending &&
                  <TrendingWrap>
                    <TrendingText>{'Trending with: '}</TrendingText>
                    <TouchableOpacity>
                      <TrendingContentText>{trending}</TrendingContentText>
                    </TouchableOpacity>
                  </TrendingWrap>
                }
              </ContentWrap>
              <ImageWrap>
                <Image source={{ uri: authorInfo.image }} />
              </ImageWrap>
            </RowWrap>
          : <View>
              {renderAuthor()}
              <Title numberOfLines={3}>{title}</Title>
            </View>
        : (!!trending || !!trendingNumber) &&
          <View>
            <RowWrap>
              <TrendingText>
                {
                  trendingNumber
                  ? `${trendingNumber}. Trending`
                  : `Trending in ${trending}`
                }
              </TrendingText>
              <ImageIcon source={ARROW} size={12} />
            </RowWrap>
            <Title numberOfLines={3}>{title}</Title>
            {
              !!tweets && <TweetsText>{`${tweets} Tweets`}</TweetsText>
            }
          </View>
      }
    </ItemContainer>
  );
}

TrendingItem.propTypes = {
  title: PropTypes.string.isRequired,
  trending: PropTypes.string,
  trendingNumber: PropTypes.number,
  authorInfo: PropTypes.object,
  tweets: PropTypes.string,
};

TrendingItem.defaultProps = {
  trending: '',
  trendingNumber: null,
  authorInfo: null,
  tweets: '',
};

export default TrendingItem;
