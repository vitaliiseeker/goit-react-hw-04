import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { MenuStyled, HeaderList, List, Item } from "./Menu.styled";
// import { ReactComponent as IconMenu } from "../icons/iconMenu.svg";


export const Menu = ({ mainMenu, subMenu, onClickMenu }) => {
  // const closeByEsc = e => {
  //   if (e.code === 'Escape') {
  //     this.props.closeModal();
  //   }
  // };

  // const closeByBackdrop = e => {
  //   if (e.currentTarget === e.target) {
  //     this.props.closeModal();
  //   }
  // };

  // const componentDidMount = () => {
  //   window.addEventListener('keydown', closeByEsc);
  //   window.addEventListener('click', closeByBackdrop);
  // }

  // const componentWillUnmount = () => {
  //   window.removeEventListener('keydown', closeByEsc);
  //   window.removeEventListener('click', closeByBackdrop);
  // }

  return (

    // <Overlay onClick={closeByBackdrop}>
    <MenuStyled>
      <HeaderList>{mainMenu}</HeaderList>
      <List>
        {subMenu.map((el, idx) => (
          <Item
            key={idx}>
            <Button
              type="button"
              name={el}
              onClick={onClickMenu}
              children={el}
            >
            </Button>
          </Item>))}
      </List>
      {/* <ButtonClose
            onClick={closeModal}>
            <IconClose />
          </ButtonClose> */}
    </MenuStyled>
    // </Overlay>
  );
}

Menu.propTypes = {
  mainMenu: PropTypes.string.isRequired,
  subMenu: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickMenu: PropTypes.func.isRequired,
}