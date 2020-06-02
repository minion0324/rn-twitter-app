import React from 'react'
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import {
  Header,
  ListContainer,
  NewsItem,
  FollowItem,
  TopBar,
  BottomBar,
  ExpandItem,
} from 'src/components';
import {
  Images,
  DummyData,
} from 'src/constants';
import {
  showDrawer,
} from 'src/navigation';

import {
  Container,
  ImageIcon,
  Body,
  SectionWrap,
  CircleButton,
} from 'src/styles/common.styles';

const {
  TWITTER_LOGO,
  ICON_STARS,
  ERIN,
  ARROW,
  ARROW_RIGHT,
  ICON_ALERT,
  ICON_HAPPENING,
} = Images;

const {
  dummyNews,
  dummyFollows,
  dummyExpands,
} = DummyData;

const HomeScreen = ({ componentId }) => {
  return (
    <Container>
      <Header
        centerIcon={<ImageIcon source={TWITTER_LOGO} />}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={<ImageIcon source={ICON_STARS} />}
        hasBorder
      />
      <Body>
        <ListContainer>
          <SectionWrap>
            {
              dummyNews.map((item) => (
                <NewsItem
                  key={item.id}
                  avatar={item.avatar}
                  authorName={item.authorName}
                  authorId={item.authorId}
                  isVerified={item.isVerified}
                  time={item.time}
                  contentText={item.contentText}
                  contentImage={item.contentImage}
                  contentReplied={item.contentReplied}
                  countReply={item.countReply}
                  countRetweet={item.countRetweet}
                  countHeart={item.countHeart}
                  aspectRatio={item.aspectRatio}
                />
              ))
            }
          </SectionWrap>
          <SectionWrap>
            <TopBar
              title={'Who to follow'}
              rightIcon={<ImageIcon source={ARROW} size={18} />}
            />
            {
              dummyFollows.map((item) => (
                <TouchableOpacity key={item.id}>
                  <FollowItem
                    avatar={item.avatar}
                    authorName={item.authorName}
                    authorId={item.authorId}
                    isVerified={item.isVerified}
                    contentText={item.contentText}
                  />
                </TouchableOpacity>
              ))
            }
            <TouchableOpacity>
              <BottomBar
                title={'Show more'}
                rightIcon={<ImageIcon source={ARROW_RIGHT} size={18} />}
              />
            </TouchableOpacity>
          </SectionWrap>

          <SectionWrap>
            <TopBar
              title={'Expand your timeline with Topics'}
              subTitle={'You\'ll see top Tweets about these right in your \nHome timeline.'}
              rightIcon={<ImageIcon source={ARROW} size={18} />}
            />
            {
              dummyExpands.map((item) => (
                <ExpandItem
                  key={item}
                  title={item}
                  leftIcon={<ImageIcon source={ICON_ALERT} />}
                />
              ))
            }
            <TouchableOpacity>
              <BottomBar
                title={'Show more'}
                rightIcon={<ImageIcon source={ARROW_RIGHT} size={18} />}
              />
            </TouchableOpacity>
          </SectionWrap>
        </ListContainer>
      </Body>
      <CircleButton>
        <ImageIcon source={ICON_HAPPENING} />
      </CircleButton>
    </Container>
  );
};

HomeScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default HomeScreen;
