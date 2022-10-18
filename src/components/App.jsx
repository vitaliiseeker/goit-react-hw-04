import { Component } from "react";
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

export class App extends Component {
  state = {
    search: "",
    images: [],
    currentImage: null,
    page: 1,
    perPage: 12,
    maxPage: null,
    isLoading: false,
    error: null,
  }

  componentDidUpdate(_, prevState) {
    const { page, search } = this.state;
    if (prevState.page !== page || prevState.search !== search) {
      this.fetchGallery();
    }
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  }

  fetchGallery = async () => {
    const { search, page, perPage } = this.state;
    try {
      this.setState({ isLoading: true });
      const response = await fetchApi(search, page, perPage);

      if (!response.hits.length) this.setState({ error: "Sorry, there are no images matching your search query. Please try again" });
      this.setState(prevState => (
        {
          images: [...prevState.images, ...mapper(response.hits)],
          maxPage: Math.ceil(response.totalHits / perPage)
        }))
    } catch (error) {
      this.setState({ error: "Error" })
    } finally {
      this.setState({ isLoading: false });
    }
  }

  onSearch = e => {
    e.preventDefault();
    const searchQuery = e.target.input.value.trim();
    if (!searchQuery) return this.setState({ error: "Enter data in the search field" });
    if (this.state.search !== searchQuery) {
      this.setState({ search: searchQuery, page: 1, maxPage: null, images: [], error: null });
    }
  }

  LoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  openModal = data => {
    this.setState({ currentImage: data })
  }

  closeModal = () => {
    this.setState({ currentImage: null })
  }

  render() {
    const { images, currentImage, page, maxPage, isLoading, error } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }} >

        <Container>

          <Searchbar onSubmit={this.onSearch} />

          <ImageGallery>
            <ImageGalleryItem
              images={images}
              openModal={this.openModal} />
          </ImageGallery>
          {isLoading && <Loader />}

          {!isLoading && !error && (images.length > 0) && page < maxPage &&
            <Button
              type="button"
              onClick={this.LoadMore} >
              Load more
            </Button>}

          {error && <Notification message={error} />}
          {currentImage && <Modal image={currentImage} closeModal={this.closeModal} />}
        </Container>
      </div>
    );
  }
}