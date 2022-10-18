import styled from 'styled-components';

export const SearchbarContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 64px;
  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 12px;

  color: #fff;
  background-color: rgb(125, 75, 175);

  box-shadow: 0px 2px 4px - 1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity var(animation);
  cursor: pointer;
  outline: none;

&:hover {
  opacity: 1;
}
`;

export const SearchForBtnLabel = styled.span`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
clip-path: inset(50%);
border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

&::placeholder {
  font: inherit;
  font-size: 18px;
}
`;
