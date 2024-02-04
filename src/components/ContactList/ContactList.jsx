import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ userArr, onUserDeleate }) => {
  return (
    <ul className={css.ContactList}>
      {userArr.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onUserDeleate={onUserDeleate}
        />
      ))}
    </ul>
  );
};

export default ContactList;
