import React from 'react';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';
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
  const renderNewsSection = () => {
    return (
      dummyNews.length > 0 &&
      <SectionWrap>
        <FlatList
          data={dummyNews}
          keyExtractor={item => (`${item.id}`)}
          renderItem={({ item }) => (
            <NewsItem
              avatar={item.avatar}
              authorName={item.authorName}
              authorId={item.authorId}
              isVerified={item.isVerified}
              time={item.time}
              sphere={item.sphere}
              contentText={item.contentText}
              contentImage={item.contentImage}
              contentReplied={item.contentReplied}
              countReply={item.countReply}
              countRetweet={item.countRetweet}
              countHeart={item.countHeart}
              aspectRatio={item.aspectRatio}
            />
          )}
        />
      </SectionWrap>
    );
  };

  const renderFollowSection = () => {
    return (
      dummyFollows.length > 0 &&
      <SectionWrap>
        <TopBar
          title={'Who to follow'}
          rightIcon={<ImageIcon source={ARROW} size={12} />}
        />
        <FlatList
          data={dummyFollows}
          keyExtractor={item => (`${item.id}`)}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <FollowItem
                avatar={item.avatar}
                authorName={item.authorName}
                authorId={item.authorId}
                isVerified={item.isVerified}
                sphere={item.sphere}
                contentText={item.contentText}
              />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity>
          <BottomBar
            title={'Show more'}
            rightIcon={<ImageIcon source={ARROW_RIGHT} size={12} />}
          />
        </TouchableOpacity>
      </SectionWrap>
    );
  };

  const renderExpandSection = () => {
    return (
      dummyExpands.length > 0 &&
      <SectionWrap>
        <TopBar
          title={'Expand your timeline with Topics'}
          subTitle={'You\'ll see top Tweets about these right in your \nHome timeline.'}
          rightIcon={<ImageIcon source={ARROW} size={12} />}
        />
        <FlatList
          data={dummyExpands}
          keyExtractor={item => (`${item}`)}
          renderItem={({ item }) => (
            <ExpandItem
              title={item}
              leftIcon={<ImageIcon source={ICON_ALERT} />}
            />
          )}
        />
        <TouchableOpacity>
          <BottomBar
            title={'Show more'}
            rightIcon={<ImageIcon source={ARROW_RIGHT} size={12} />}
          />
        </TouchableOpacity>
      </SectionWrap>
    );
  };

  return (
    <Container>
      <Header
        centerIcon={<ImageIcon source={TWITTER_LOGO} size={25} />}
        avatar={ERIN}
        onPressLeft={() => showDrawer(componentId)}
        rightIcon={<ImageIcon source={ICON_STARS} size={25} />}
        hasBorder
      />
      <Body>
        <ListContainer>
          { renderNewsSection() }

          { renderFollowSection() }

          { renderExpandSection() }
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
