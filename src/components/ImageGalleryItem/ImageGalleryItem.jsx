import PropTypes from 'prop-types';
import { Item, Image } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ images, openModal = () => { } }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <Item
            key={id}
            onClick={() => {
              openModal({ src: largeImageURL, alt: tags })
            }}>
            <Image
              src={webformatURL}
              alt={tags}
            />
          </Item>)
      })
      }
    </>
  )
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
}