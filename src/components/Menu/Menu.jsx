import PropTypes from 'prop-types';
import { MenuStyled, HeaderList, List, Item } from "./Menu.styled";

export const Menu = ({ mainMenu, subMenu, onCurrentMenu }) => {

  const onClickMenu = (e) => {
    const currentSubMenu = document.querySelector(".current-menu");

    if (currentSubMenu) {
      currentSubMenu.classList.remove("current-menu")
    }
    e.target.classList.add("current-menu");
    onCurrentMenu(e.target.textContent);
  };

  return (

    <MenuStyled>
      <HeaderList>{mainMenu}</HeaderList>
      <List>
        {subMenu.map((el, idx) => (
          <Item
            key={idx}
            onClick={onClickMenu}>
            {el}
          </Item>))}
      </List>
    </MenuStyled>
  );
}

Menu.propTypes = {
  mainMenu: PropTypes.string.isRequired,
  subMenu: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCurrentMenu: PropTypes.func.isRequired,
}