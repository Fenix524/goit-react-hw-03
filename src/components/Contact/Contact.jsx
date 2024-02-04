import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

const Contact = ({ id, name, number, onUserDeleate }) => {
  return (
    <div className={css.Contact} id={id}>
      <div>
        <div className={css.row}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.row}>
          <BsTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.deleateBtn} onClick={onUserDeleate}>
        <FaTrashCan />
        <p>Deleate</p>
      </button>
    </div>
  );
};

export default Contact;
