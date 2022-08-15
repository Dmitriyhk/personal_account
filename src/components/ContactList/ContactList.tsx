import React from "react";
import { useDispatch } from "react-redux";
import { delContact } from "../../store/slices/contactSlice";
import Button from "../../ui/Button";
import { ReactComponent as Close } from "../../assets/img/Close.svg";

import styles from "./ContactList.module.scss";
import { IContact } from "../../pages/Home";

interface IContactList {
  callback: (id: IContact) => void;
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
  data: IContact[];
}

const ContactList: React.FC<IContactList> = ({
  callback,
  setIsChange,
  data,
}) => {
  const dispatch = useDispatch();
  if (data.length === 0) {
    return (
      <div className={styles.noResult}>
        <span>No contacts :(</span>
      </div>
    );
  }
  return (
    <div className={styles.list}>
      {data.map((el) => (
        <div className={styles.list_item} key={el.id}>
          <img alt="icon" className={styles.list_item__icon} src={el.img} />
          <div className={styles.list_item__info}>
            <div className={styles.info_name}>
              <span>
                {el.name} {el.secondName}
              </span>
            </div>
            <div className={styles.info_contact}>
              <div>
                <span className={styles.info_contact__key}>Phone: </span>
                <span className={styles.info_contact__value}>
                  {el.phone || "-"}
                </span>
              </div>
              <div>
                <span className={styles.info_contact__key}>Email: </span>
                <span className={styles.info_contact__value}>
                  {el.email || "-"}
                </span>
              </div>
            </div>
            <Button
              type="transparent"
              text="Update contact"
              callback={() => {
                setIsChange(true);
                callback(el);
              }}
            />
          </div>
          <Close
            className={styles.list_item__close}
            onClick={() => dispatch(delContact(el.id))}
          />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
