import React from "react";
import "../componentRegistery.less";

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
          placeholder="Searches for repo name or words in description"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <input className="normalButton" type="submit" value="Submit" />
      </form>
    </>
  );
};
export default SearchForm;
