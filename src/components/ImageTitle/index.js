import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  MAIN_PADDING,
} from 'src/constants';

const ItemContainer = styled.View`
  width: 100%;
  aspect-ratio: 2;
  padding-vertical: 10px;
  padding-horizontal: ${MAIN_PADDING}px;
  justify-content: flex-end;
`;

const OverlayWrap = styled.View`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
`;

const FullImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.View`

`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: white;
`;

const SphereWrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const SphereText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const TimeText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const Badge = styled.View`
  padding-vertical: 1px;
  padding-horizontal: 5px;
  background-color: #e0245e;
  border-radius: 5px;
`;

const TrendingText = styled.Text`
  font-size: 16px;
  color: white;
`;

const TrendingContentText = styled(TrendingText)`
  font-size: 16px;
  color: white;
  text-decoration-line: underline;
`;

const TrendingWrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const ImageTitle = ({
  image,
  title,
  sphere,
  time,
  badge,
  trending,
}) => {
  return (
    <ItemContainer>
      <OverlayWrap>
        <FullImage source={{ uri: image }} />
      </OverlayWrap>
      <ContentWrap>
        <SphereWrap>
          <SphereText>{`${sphere} • `}</SphereText>
          {
            badge
            ? <Badge>
                <TimeText>{time}</TimeText>
              </Badge>
            : <TimeText>{time}</TimeText>
          }

        </SphereWrap>
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
    </ItemContainer>
  );
}

ImageTitle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sphere: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  badge: PropTypes.bool,
  trending: PropTypes.string,
};

ImageTitle.defaultProps = {
  badge: false,
  trending: '',
};

export default ImageTitle;
