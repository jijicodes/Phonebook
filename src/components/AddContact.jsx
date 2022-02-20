import { useState } from "react";

export const AddContact = ({ onAddContact }) => {
  const [nameText, setNameText] = useState("");
  const [number, setNumber] = useState("");
  const upperCaseHandle = (name) => {
    return name
      .split(" ")
      .map((c) => {
        return c[0].toUpperCase() + c.substring(1);
      })
      .join(" ");
  };

  return (
    <div>
      <h1>Add a new contact</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddContact(upperCaseHandle(nameText), number);
          setNumber("");
          setNameText("");
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
        ></input>
        <br></br>
        <label>Number: </label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <br></br>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddContact;
