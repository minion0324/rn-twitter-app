import styled from 'styled-components';

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
`;

const CancelText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #1da1f2;
`;

export {
  SearchBar,
  SearchText,
  SearchInput,
  CancelText,
};
