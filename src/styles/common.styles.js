import styled from 'styled-components';

import {
  MAIN_PADDING,
} from 'src/constants';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const InnerWrap = styled.View`
  padding-horizontal: ${MAIN_PADDING}px;
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
  width: 72px;
  aspect-ratio: 1;
  border-radius: 36px;
  background-color: #1da1f3;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  InnerWrap,
  ImageIcon,
  Body,
  SectionWrap,
  CircleButton,
};
