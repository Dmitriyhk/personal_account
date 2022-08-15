import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { addContact, updateContact } from "../store/slices/contactSlice";
import { useAppSelector } from "../types/hooks";

export interface IContact {
  name: string;
  secondName: string;
  phone: string;
  email: string;
  id: string;
  img: string;
}

export const contactData = {
  name: "",
  secondName: "",
  phone: "",
  email: "",
  id: "",
  img: "",
};

const onMatchedValues = (arr: IContact[], str: string | null | undefined) => {
  if (!str) {
    return arr;
  }

  return arr.filter(
    (item) =>
      item?.name.toLowerCase().match(str.toLowerCase()) ||
      item?.email.toLowerCase().match(str.toLowerCase()) ||
      item?.phone.toLowerCase().match(str.toLowerCase()) ||
      item?.secondName.toLowerCase().match(str.toLowerCase())
  );
};

const Home = () => {
  const dispatch = useDispatch();

  const { data } = useAppSelector((state) => state?.contact);
  const [modalVisible, setModalIsOpen] = useState(false);
  const [contact, setContact] = useState<IContact>(contactData);
  const [isChange, setIsChange] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const newContact = (contact: IContact) => {
    setModalIsOpen(true);
    setContact(contact);
  };

  return (
    <div>
      <Header
        callbackContact={() => {
          setIsChange(false);
          setModalIsOpen(true);
        }}
        searchValue={searchValue}
        setSearchValue={(e) => setSearchValue(e.target.value)}
      />
      {modalVisible && (
        <Modal
          setModalVisible={setModalIsOpen}
          reset={() => {
            setContact(contactData);
          }}
          apply={() => {
            dispatch(isChange ? updateContact(contact) : addContact(contact));
            setContact(contactData);
          }}
          isChange={isChange}
        >
          <ContactForm contact={contact} setContact={setContact} />
        </Modal>
      )}
      <ContactList
        data={onMatchedValues(data, searchValue)}
        setIsChange={setIsChange}
        callback={(id: IContact) => newContact(id)}
      />
    </div>
  );
};

export default Home;
