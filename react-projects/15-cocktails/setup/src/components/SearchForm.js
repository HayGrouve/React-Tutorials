import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search a cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            placeholder="Hit me..."
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
