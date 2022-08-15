import React from "react";

import styles from "./Search.module.scss";

interface ISearch {
  value: string;
  setValue: (key: React.ChangeEvent<HTMLInputElement>) => void | null;
}

const Search: React.FC<ISearch> = ({ value, setValue }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.search_input}
        value={value}
        onChange={setValue}
        placeholder="Search contact"
        type="search"
      />
    </div>
  );
};

export default Search;
