import css from "./SearchBox.module.css";

const SearchBox = ({ searchFilters, setSearchFilters }) => {
  return (
    <div className={css.SearchBox}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={searchFilters}
        onChange={(evt) => setSearchFilters(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
