import { useState, useEffect } from "react";
import { fetchApi } from "../../components/utils/api.js";
import { mapper } from '../../components/utils/mapper';
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import { ImageGalleryItem } from "../../components/ImageGalleryItem/ImageGalleryItem";
import { BtnLoader } from '../../components/Button/Button.styled';
import { Loader } from '../../components/Loader/Loader';
import { Notification } from '../../components/Notification/Notification';
import { Modal } from '../../components/Modal/Modal';

export const ImagesPage = () => {

  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [maxPage, setMaxPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search) {
      fetchGallery();
    }
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
    // eslint-disable-next-line 
  }, [search, page]);

  const fetchGallery = async () => {
    try {
      setIsLoading(true);
      const response = await fetchApi(search, page, perPage);

      if (!response.hits.length) {
        setError("Sorry, there are no images matching your search query. Please try again");
      }
      setImages((prevImages) => [...prevImages, ...mapper(response.hits)]);
      setMaxPage(Math.ceil(response.totalHits / perPage));
    } catch (error) {
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  }

  const onSearch = e => {
    e.preventDefault();
    const searchQuery = e.target.input.value.trim();
    if (!searchQuery) {
      setImages([]);
      setError("Enter data in the search field");
      return;
    }
    if (search !== searchQuery) {
      setSearch(searchQuery);
      setImages([]);
      setPage(1);
      setMaxPage(null);
      setError(null);
    };
  }

  const LoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  const openModal = data => {
    setCurrentImage(data);
  }

  const closeModal = () => {
    setCurrentImage(null);
  }


  return (
    <>
      <Searchbar onSubmit={onSearch} />

      <ImageGallery>
        <ImageGalleryItem
          images={images}
          openModal={openModal}
        />
      </ImageGallery>
      {isLoading && <Loader />}

      {
        !isLoading && !error && (images.length > 0) && page < maxPage &&
        <BtnLoader
          type="button"
          onClick={LoadMore} >
          Load more
        </BtnLoader>
      }

      {error && <Notification message={error} />}
      {currentImage && <Modal image={currentImage} closeModal={closeModal} />}
    </>
  )
}