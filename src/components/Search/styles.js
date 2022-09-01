import styled from "styled-components";

export const Search = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
`;

export const SearchBar = styled.input`
  width: 300px;
  height: 16px;
  padding: 12px;
  border: 2px solid #565656;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 38px;
  cursor: pointer;
`;