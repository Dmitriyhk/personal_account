import React from "react";
import Button from "../../ui/Button";
import { ReactComponent as Close } from "../../assets/img/Close.svg";

import styles from "./Modal.module.scss";

interface IModal {
  setModalVisible: (param: boolean) => void;
  isOpen?: boolean;
  apply: () => void;
  children: React.ReactNode;
  isChange?: boolean;
  reset: () => void;
}

const Modal: React.FC<IModal> = ({
  children,
  setModalVisible,
  apply,
  isChange = false,
  reset,
}) => {
  const closeHandler = () => {
    document.body.style.overflow = "";
    setModalVisible(false);
    reset();
  };

  const sendHandler = () => {
    document.body.style.overflow = "";
    setModalVisible(false);
    apply();
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <Close onClick={closeHandler} className={styles.modal_close} />
        <div className={styles.modal_header}>
          <span>{isChange ? "Change contact" : "Add contact"}</span>
        </div>
        <div className={styles.modal_content}>{children}</div>
        <div className={styles.modal_footer}>
          <Button type="transparent" callback={closeHandler} text="Close" />

          <Button
            callback={sendHandler}
            text={isChange ? "Change contact" : "Add contact"}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
