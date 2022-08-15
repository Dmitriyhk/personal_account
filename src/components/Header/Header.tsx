import React from "react";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { ReactComponent as Bat } from "../../assets/img/Bat.svg";
import { delAllContact } from "../../store/slices/contactSlice";
import Button from "../../ui/Button";
import Search from "../../ui/Search";

import styles from "./Header.module.scss";

interface IHeader {
  searchValue: string;
  setSearchValue: (key: React.ChangeEvent<HTMLInputElement>) => void | null;
  callbackContact: () => void;
}

const Header: React.FC<IHeader> = ({
  setSearchValue,
  searchValue,
  callbackContact,
}) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <Bat className={styles.header_logo__icon} />
        <span className={styles.header_logo__text}>Cute bat</span>
      </div>
      <Search value={searchValue} setValue={setSearchValue} />
      <Button
        type="transparent"
        callback={callbackContact}
        text="Add contact"
      />

      <button
        onClick={() => {
          dispatch(delAllContact());
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Header;
