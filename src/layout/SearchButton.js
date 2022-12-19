const SearchButton = ({ searchToggle }) => {
  return (
    <a
      href="#"
      className="metaportal_fn_search hold"
      onClick={(e) => {
        e.preventDefault();
        searchToggle(true);
      }}
    >
      <span className="icon">
        <img src="/svg/loupe.svg" alt="" className="fn__svg" />
      </span>
    </a>
  );
};
export default SearchButton;
