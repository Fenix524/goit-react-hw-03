import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const testStartData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contactArr, setContactArr] = useState(
    localStorage.getItem("contactArr")
      ? JSON.parse(localStorage.getItem("contactArr"))
      : testStartData
  );
  const [searchFilters, setSearchFilters] = useState("");

  useEffect(() => {
    localStorage.setItem("contactArr", JSON.stringify(contactArr));
  }, [contactArr]);

  const onContactDelete = (id) => {
    setContactArr(contactArr.filter((contact) => id != contact.id));
  };

  const handleSubmit = ({ contactname, contactphone }) => {
    setContactArr(() => {
      return [
        ...contactArr,
        {
          id: nanoid(),
          name: contactname,
          number: contactphone,
        },
      ];
    });
  };

  const contactArrByFilters = (filterText, contactArr) => {
    return contactArr.filter((contact) =>
      contact.name?.toLowerCase().includes(filterText?.toLowerCase())
    );
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />

        <SearchBox
          searchFilters={searchFilters}
          setSearchFilters={setSearchFilters}
        />
        <ContactList
          contactArr={contactArrByFilters(searchFilters, contactArr)}
          onContactDelete={onContactDelete}
        />
      </div>
    </>
  );
}

export default App;
