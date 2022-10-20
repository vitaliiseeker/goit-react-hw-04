import styled from 'styled-components';

export const MenuStyled = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 500;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 30px;
  padding : 5px 20px;

  color: #fff;
  background-color: #ffff00;
`;

export const HeaderList = styled.h2`
  color: #0000ff;
  font-size: 20px;
`;

export const List = styled.ul`
display: flex;
padding: 10px 20px;

@media screen and (max-width: 700px) {
  flex-direction: column;
  gap: 8px;
}

@media screen and (min-width: 700.02px) {
  flex-direction: row;
  gap: 20px;
}
`;

export const Item = styled.li`
  font-size: 18px;
  background-color: #0000ff;
`;

// export const ButtonClose = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   cursor: pointer;
  
//   & > svg {
//   fill: #808080;
//   transition: fill var(--animation);
//   }

//   & > svg:hover{
//   fill: #4C00FE;
//   }
// `;