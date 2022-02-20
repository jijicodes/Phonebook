import React, { useState, useEffect } from "react";
import contactServices from "../services/contacts";
import { AddContact } from "./AddContact";
import { FilterName } from "./FilterName";

export const Display = () => {
  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState("");
  const filterName = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  useEffect(() => {
    contactServices.getAll().then(setPersons);
  }, []);
  console.log("render", persons.length, "persons");

  const addContact = (name, number) => {
    const contactObject = {
      name,
      number,
    };

    contactServices.create(contactObject).then((newContact) => {
      return setPersons((prevP) => [...prevP, newContact]);
    });
  };

  return (
    <div>
      <FilterName
        nameSearch={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <AddContact onAddContact={addContact} />
      <h1>Contact</h1>
      {filterName.map((p) => (
        <ul key={p.id}>{`${p.name}: ${p.number}`}</ul>
      ))}
    </div>
  );
};
