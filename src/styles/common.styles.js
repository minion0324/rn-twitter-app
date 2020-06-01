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
  resizeMode: contain;
`;

export {
  Container,
  InnerWrap,
  ImageIcon,
};
