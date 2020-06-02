import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  MAIN_PADDING,
} from 'src/constants';

const AlertContainer = styled.View`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  padding-vertical: 15px;
  padding-horizontal: ${MAIN_PADDING * 1.5}px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const SubTitle = styled.Text`
  font-size: 18px;
  color: #717b85;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  padding-vertical: 8px;
  padding-horizontal: 20px;
  border-color: #1da1f3;
  border-width: 1px;
  border-radius: 20px;
  background-color: #1da1f3;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const FullAlert = ({
  title,
  subTitle,
  buttonText,
  onPressButton,
}) => {
  return (
    <AlertContainer>
      <Title>{title}</Title>
      {
        !!subTitle &&
        <SubTitle>{subTitle}</SubTitle>
      }
      {
        !!buttonText &&
        <Button onPress={onPressButton}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      }
    </AlertContainer>
  );
}

FullAlert.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
  onPressButton: PropTypes.func,
};

FullAlert.defaultProps = {
  subTitle: '',
  buttonText: '',
  onPressButton: null,
};

export default FullAlert;
