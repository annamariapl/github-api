import React from "react";
import "./searchForm.less"

interface Props {
  query: string;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const SearchForm: React.FC<Props> = ({ handleSubmit, handleChange, query }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          placeholder="Search repo name or keywords in description"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <input className="normalButton" type="submit" value="Search" />
      </form>

    </>
  );
};
export default SearchForm;
