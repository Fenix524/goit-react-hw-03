import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactArr, onContactDelete }) => {
  return (
    <ul className={css.ContactList}>
      {contactArr.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onContactDelete={onContactDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
