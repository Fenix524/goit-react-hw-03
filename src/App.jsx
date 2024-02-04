import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const testStartData = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [userArr, setUserArr] = useState(testStartData);
  const [searchFilters, setSearchFilters] = useState("");

  const onUserDeleate = (evt) => {
    setUserArr(
      userArr.filter((user) => evt.currentTarget.parentNode.id != user.id)
    );
  };

  const handleSubmit = ({ username, userphone }, actions) => {
    setUserArr(() => {
      return [
        ...userArr,
        {
          id: nanoid(),
          name: username,
          number: userphone,
        },
      ];
    });
    actions.resetForm();
  };

  const userArrByFilters = (filterText, userArr) => {
    return userArr.filter((user) =>
      user.name?.toLowerCase().includes(filterText?.toLowerCase())
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
          userArr={userArrByFilters(searchFilters, userArr)}
          onUserDeleate={onUserDeleate}
        />
      </div>
    </>
  );
}

export default App;
