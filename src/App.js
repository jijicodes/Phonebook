// import React, { useState } from "react";
// import { Header } from "./components/Header";
// import { AddUserInfo } from "./components/AddUserInfo";
// import { Display } from "./components/Display";
// import { NameFilter } from "./components/NameFilter";

// const App = () => {
//   const [filterInputText, setFilterInputText] = useState("");
//   const [persons, setPersons] = useState([
//     { name: "Arto Hellas", number: "000-000-0000" },
//     { name: "Makeu Maltino", number: "12-232-1444" },
//     { name: "Jieuny Seo", number: "22-000-0004" },
//     { name: "Joenga Theresa", number: "00320-000-1000" },
//     { name: "Barto Hellas", number: "000-000-0000" },
//     { name: "mark Maltino", number: "12-232-1444" },
//     { name: "Jieun Seo", number: "22-000-0004" },
//     { name: "jiji Theresa", number: "00320-000-1000" },
//   ]);

//   const filterString = filterInputText.toLowerCase();
//   const filteredPersons = persons.filter(({ name }) =>
//     name.toLowerCase().includes(filterString)
//   );
//   console.log(filteredPersons);

//   const addPerson = (name, number) => {
//     const isDuplicated = persons.find((person) => person.number === number);
//     isDuplicated
//       ? alert(`${name} ${number} is already added to the phonebook.`)
//       : setPersons([...persons, { name, number }]);
//   };
//   return (
//     <div>
//       <Header />
//       <NameFilter
//         name={filterInputText}
//         onChange={(newText) => setFilterInputText(newText)}
//       />
//       <AddUserInfo onAdd={addPerson} />
//       <h2>Numbers</h2>
//       <Display listOfNames={filteredPersons} />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////////////
////////////////2nd version//////////////
import { Display } from "./components/Display";
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Display />
    </div>
  );
};

export default App;
