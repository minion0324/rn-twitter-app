import styled from 'styled-components';

import {
  HEIGHT,
  MAIN_PADDING,
} from 'src/constants';

const Header = styled.View`
  padding-horizontal: ${MAIN_PADDING}px;
  border-bottom-width: 0.5px;
  border-color: #717b85;
`;

const AvatarHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${HEIGHT * 0.02}px;
  margin-bottom: ${HEIGHT * 0.01}px;
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

const NameText = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const IdText = styled.Text`
  font-size: 16px;
  color: #717b85;
  margin-top: 3px;
`;

const FollowHeader = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: row;
`;

const FollowItem = styled.TouchableOpacity`
  flex-direction: row;
`;

const FollowText = styled.Text`
  font-size: 16px;
  color: #717b85;
`;

const CountText = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 600;
`;

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${MAIN_PADDING}px;
  height: ${HEIGHT * 0.09}px;
`;

const MenuTitle = styled.Text`
  font-size: 18px;
  color: black;
  margin-left: ${MAIN_PADDING}px;
`;

const HelpItem = styled.TouchableOpacity`
  justify-content: center;
  height: ${HEIGHT * 0.09}px
`;

const MenuWrap = styled.View`
  border-bottom-width: 0.5px;
  border-color: #717b85;
`;

const HelpWrap = styled.View`
  justify-content: center;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${MAIN_PADDING}px;
  border-top-width: 0.5px;
  border-color: #717b85;
`;

export {
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
};
