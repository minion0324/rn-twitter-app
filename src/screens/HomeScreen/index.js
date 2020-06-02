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
  AVATAR1,
  AVATAR2,
  AVATAR3,
  ARROW,
  ARROW_RIGHT,
  ICON_ALERT,
  ICON_HAPPENING,
} = Images;

const news = [
  {
    id: 0,
    avatar: AVATAR1,
    authorName: 'Overtime',
    authorId: '@overtime',
    isVerified: true,
    time: '1h',
    contentText:
      'With the rise of online shopping, making the move to an online store has countless benefits.'
      + '\n\nBut the sheer quantity of options for launching a website can be overwhelming.',
    contentReplied: {
      avatar: AVATAR2,
      authorName: 'Ashok Swain',
      authorId: '@ashoswai',
      isVerified: true,
      time: '2h',
      contentText:
        'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
        + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
      contentImage: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000106/24a24af6-a2c6-4196-a964-51dff8a165d9-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
    },
    countReply: '1',
    countRetweet: '321',
    countHeart: '214',
  },
  {
    id: 1,
    avatar: AVATAR2,
    authorName: 'Ashok Swain',
    authorId: '@ashoswai',
    isVerified: true,
    time: '2h',
    contentText:
      'That’s why Best E-Commerce Builders 2018 offers a methodical comparison of the most popular, highly-rated website builders.'
      + '\n\nWe provide information based on first-hand experience with website builders to help you make the best decision for your particular needs and get your store online in no time.',
    contentImage: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000106/24a24af6-a2c6-4196-a964-51dff8a165d9-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
    countReply: '102',
    countRetweet: '367',
    countHeart: '21.4k',
  },
  {
    id: 2,
    avatar: AVATAR3,
    authorName: 'We are all in this Together',
    authorId: '@weare',
    isVerified: true,
    time: '3h',
    contentText:
      'Before you dive in, make sure to think about the kind of website you’d like for your business.'
      + '\n\nDo you have a particular model in mind? Must-have features?'
      + '\n\nA designer theme or template? What can you do without?'
      + '\n\nOur reviews and analyses pick through all of the most important aspects of e-commerce website builders to make your choice as simple and stress-free as possible.',
    countReply: '603',
    countRetweet: '474',
    countHeart: '908',
  },
  {
    id: 3,
    authorName: 'Robert',
    authorId: '@robert',
    isVerified: false,
    time: '3h',
    contentImage: 'https://storage.googleapis.com/shift-0001/__sized__/recipe/00000/00000120/8b2516bf-0807-4649-9495-f18237d82c7c-023fcb09cba6b5cdee53afe90e810f4b.jpeg',
    countReply: '12',
    countRetweet: '23',
    countHeart: '10',
    aspectRatio: 1,
  },
];

const follows = [
  {
    id: 0,
    avatar: AVATAR1,
    authorName: 'Overtime',
    authorId: '@overtime',
    isVerified: true,
    contentText:
      'With the rise of online shopping, making the move to an online store has countless benefits.'
      + '\n\nBut the sheer quantity of options for launching a website can be overwhelming.',
  },
  {
    id: 1,
    avatar: AVATAR2,
    authorName: 'Ashok Swain',
    authorId: '@ashoswai',
    isVerified: true,
  },
  {
    id: 2,
    avatar: AVATAR3,
    authorName: 'We are all in this Together',
    authorId: '@weare',
    isVerified: true,
    contentText:
      'Do you have a particular model in mind? Must-have features?',
  },
];

const expands = [
  'Drew Brees', 'Sports news', 'Handbags', 'Entertainment', 'Fast food',
]

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
              news.map((item) => (
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
              follows.map((item) => (
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
              expands.map((item) => (
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
