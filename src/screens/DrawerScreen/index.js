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
  DummyData,
} from 'src/constants';

import {
  Container,
  ImageIcon,
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
  ICON_LAMP,
  ICON_CODE,
  ICON_ACCOUNT,
} = Images;

const {
  dummyMenu,
  dummyHelp,
} = DummyData;

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
          <TouchableOpacity>
            <ImageIcon source={ICON_ACCOUNT} size={36} />
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
          <FlatList
            data={dummyMenu}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <MenuItem>
                <ImageIcon source={item.icon} size={20} />
                <MenuTitle>
                  {item.title}
                </MenuTitle>
              </MenuItem>
            )}
          />
        </MenuWrap>
        <HelpWrap>
          <FlatList
            data={dummyHelp}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <HelpItem>
                <MenuTitle>
                  {item.title}
                </MenuTitle>
              </HelpItem>
            )}
          />
        </HelpWrap>
      </ScrollView>

      <Footer>
        <TouchableOpacity>
          <ImageIcon source={ICON_LAMP} size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageIcon source={ICON_CODE} size={20} />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

DrawerScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default DrawerScreen;
