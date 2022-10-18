import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from "./Modal.styled";

export class Modal extends Component {
  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
    window.addEventListener('click', this.closeByBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
    window.removeEventListener('click', this.closeByBackdrop);
  }

  render() {
    const {
      image: { src, alt }
    } = this.props;

    return (
      <Overlay onClick={this.closeByBackdrop}>
        <ModalStyled>
          <img
            src={src}
            alt={alt}
          />
        </ModalStyled>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
}
