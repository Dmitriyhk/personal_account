import React, { useEffect } from "react";
import Input from "../../ui/Input";
import uuid from "react-uuid";
import { AvatarGenerator } from "random-avatar-generator";
import { IContact } from "../../pages/Home";

import styles from "./ContactForm.module.scss";

const ContactForm: React.FC<{
  contact: IContact;
  setContact: React.Dispatch<React.SetStateAction<IContact>>;
}> = ({ contact, setContact }) => {
  useEffect(() => {
    if (contact.id === "") {
      const generator = new AvatarGenerator();
      setContact({
        ...contact,
        id: uuid(),
        img: generator.generateRandomAvatar(),
      });
    }
  }, []);

  return (
    <form className={styles.form} onClick={(e) => e.preventDefault()}>
      <Input
        type="text"
        placeholder="first name"
        value={contact.name}
        setValue={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <Input
        type="text"
        placeholder="second name"
        value={contact.secondName}
        setValue={(e) => setContact({ ...contact, secondName: e.target.value })}
      />
      <Input
        type="phone"
        placeholder="phone"
        value={contact.phone}
        setValue={(e) => setContact({ ...contact, phone: e.target.value })}
      />
      <Input
        type="email"
        placeholder="email"
        value={contact.email}
        setValue={(e) => setContact({ ...contact, email: e.target.value })}
      />
    </form>
  );
};

export default ContactForm;
