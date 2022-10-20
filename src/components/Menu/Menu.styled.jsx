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

  max-width: 1200px;
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
display: block;
min-width: 180px;
margin: 0 auto;
padding: 8px 16px;

font-size: 18px;
line-height: calc(24 / 18);
text-align: center;

color: #fff;
background-color: #3f51b5;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
0px 2px 2px 0px rgba(0, 0, 0, 0.14),
0px 1px 5px 0px rgba(0, 0, 0, 0.12);
transition: all var(--animation);
cursor: pointer;

  &:hover,
  :focus {
  color: #ffff00;
  background-color: #303f9f;
  }
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