/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './searchInput.module.css';
import Image from 'next/image';

import icon from './search.png'

const SearchInput = () => {
  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        className={styles.formControl}
        placeholder="Pesquisar"
        aria-label="Pesquisar"
      />
      <div className={styles.inputGroupAppend}>
        <span className={styles.inputGroupText}>
          <Image
            src={icon}
            alt="Search"
          />
        </span>
      </div>
    </div>
  );
};

export default SearchInput;