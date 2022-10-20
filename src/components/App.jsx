import { useState, useEffect } from "react";
import { Menu } from './Menu/Menu';
import { fetchApi } from "./utils/api";
import { mapper } from './utils/mapper';
import { Container } from "./Container/Container";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Notification } from './Notification/Notification';
import { Modal } from './Modal/Modal';

export const App = () => {

  const [currentMenu, setCurrentMenu] = useState("");
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [maxPage, setMaxPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mainMenu = "Goit-react-hw-04";
  const subMenu = ["Feedback", "Phonebook", "Images"];

  const onClickMenu = async (e) => {
    const a = await e.target.textContent;
    setCurrentMenu(a);
  }

  useEffect(() => {
    if (search) {
      fetchGallery();
    }
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }} >

      <Container>
        <Menu
          mainMenu={mainMenu}
          subMenu={subMenu}
          onClickMenu={onClickMenu}
        />
        {/* // =========================== I M A G E ================== */}
        <Searchbar onSubmit={onSearch} />

        <ImageGallery>
          <ImageGalleryItem
            images={images}
            openModal={openModal}
          />
        </ImageGallery>
        {isLoading && <Loader />}

        {!isLoading && !error && (images.length > 0) && page < maxPage &&
          <Button
            type="button"
            onClick={LoadMore} >
            Load more
          </Button>}

        {error && <Notification message={error} />}
        {currentImage && <Modal image={currentImage} closeModal={closeModal} />}
        {/* // =========================== I M A G E =================== */}
      </Container>
    </div>

  );
}