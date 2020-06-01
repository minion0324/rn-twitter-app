import React from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  Images,
} from 'src/constants';
import {
  showDrawer,
} from 'src/navigation';

import {
  Container,
  ImageIcon,
  InnerWrap,
} from 'src/styles/common.styles';

import {
  Header,
  AvatarHeader,
  AvatarWrap,
  AvatarImage,
  NameText,
  IdText,
  FollowHeader,
  FollowItem,
  FollowText,
  CountText,
  MenuItem,
  MenuTitle,
  HelpItem,
  MenuWrap,
  HelpWrap,
  Footer,
} from './styled';

const {
  ERIN,
  AVATAR,
  ICON_PROFILE,
  ICON_LISTS,
  ICON_TOPICS,
  ICON_BOOKMARKS,
  ICON_MOMENTS,
  ICON_LAMP,
  ICON_CODE,
} = Images;

const menu = [
  {
    icon: <ImageIcon source={ICON_PROFILE} size={24} />,
    title: 'Profile',
  },
  {
    icon: <ImageIcon source={ICON_LISTS} size={24} />,
    title: 'Lists',
  },
  {
    icon: <ImageIcon source={ICON_TOPICS} size={24} />,
    title: 'Topics',
  },
  {
    icon: <ImageIcon source={ICON_BOOKMARKS} size={24} />,
    title: 'Bookmarks',
  },
  {
    icon: <ImageIcon source={ICON_MOMENTS} size={24} />,
    title: 'Moments',
  },
];

const helps = [
  {
    title: 'Settings and Privacy',
  },
  {
    title: 'Help Center',
  },
];

const DrawerScreen = ({ componentId }) => {
  return (
    <Container>
      <Header>
        <AvatarHeader>
          <TouchableOpacity>
            <AvatarWrap>
              <AvatarImage source={ERIN || AVATAR} />
            </AvatarWrap>
          </TouchableOpacity>
        </AvatarHeader>
        <View>
          <TouchableOpacity>
            <NameText>Jun Rim</NameText>
          </TouchableOpacity>
          <TouchableOpacity>
            <IdText>@JunRim</IdText>
          </TouchableOpacity>
        </View>
        <FollowHeader>
          <FollowItem>
            <CountText>1387</CountText>
            <FollowText>{' Following   '}</FollowText>
          </FollowItem>
          <FollowItem>
            <CountText>324</CountText>
            <FollowText>{' Followers   '}</FollowText>
          </FollowItem>
        </FollowHeader>
      </Header>

      <ScrollView>
        <MenuWrap>
        {
          menu.map(item => (
            <MenuItem
              key={item.title}
            >
              {item.icon}
              <MenuTitle>
                {item.title}
              </MenuTitle>
            </MenuItem>
          ))
        }
        </MenuWrap>
        <HelpWrap>
        {
          helps.map(item => (
            <HelpItem
              key={item.title}
            >
              <MenuTitle>
                {item.title}
              </MenuTitle>
            </HelpItem>
          ))
        }
        </HelpWrap>
      </ScrollView>

      <Footer>
        <TouchableOpacity>
          <ImageIcon source={ICON_LAMP} size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageIcon source={ICON_CODE} size={24} />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

DrawerScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default DrawerScreen;
