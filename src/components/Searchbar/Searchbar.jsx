import { useState } from "react";
import PropTypes from 'prop-types';
import { SearchbarContainer, SearchForm, SearchFormBtn, SearchForBtnLabel, SearchFormInput } from './Searchbar.styled';
import { ReactComponent as IconBtn } from "../icons/search.svg";


export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchbarContainer>
      <SearchForm
        onSubmit={onSubmit}>
        <SearchFormBtn
          type="submit">
          <IconBtn width="40" height="40" />
          <SearchForBtnLabel>
            Search
          </SearchForBtnLabel>
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          name="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
