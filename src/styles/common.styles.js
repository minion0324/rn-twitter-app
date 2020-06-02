import styled from 'styled-components';

import {
  MAIN_PADDING,
} from 'src/constants';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const ImageIcon = styled.Image`
  width: ${props => props.size || 30}px;
  height: ${props => props.size || 30}px;
  resizeMode: contain;
`;

const Body = styled.View`
  flex: 1;
  background-color: #e6ecf0;
`;

const SectionWrap = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;

const CircleButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 64px;
  aspect-ratio: 1;
  border-radius: 32px;
  background-color: #1da1f3;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #e7ecf0;
  padding-vertical: 7px;
  padding-horizontal: 12px;
  border-radius: 20px;
`;

const SearchText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #657688;
`;

const SearchInput = styled.TextInput`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  padding: 0px;
`;

const CancelText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #1da1f2;
`;

export {
  Container,
  ImageIcon,
  Body,
  SectionWrap,
  CircleButton,
  SearchBar,
  SearchText,
  SearchInput,
  CancelText,
};
