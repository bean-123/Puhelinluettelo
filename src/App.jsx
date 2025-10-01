import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Names from "./components/Names";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function onChange(e) {
    setInputText(e.target.value);
  }

  function onChangeNumber(e) {
    setInputNumber(e.target.value);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function add() {
    const exists = entries.some(
      (entry) =>
        entry.name.toLocaleLowerCase() === inputText.toLocaleLowerCase()
    );

    if (exists) {
      alert(`${inputText} is already added to phonebook `);
      return;
    }

    setEntries([...entries, { name: inputText, number: inputNumber }]);
  }

  function clear() {
    setInputText("");
    setInputNumber("");
  }

  function handleClick() {
    add();
    clear();
  }

  const filteredEntries = entries.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <Header headerText="Phonebook" />
      <Input
        inputText="search"
        type="text"
        onChange={handleSearch}
        value={searchTerm}
      />
      <Header headerText="Add new" />
      <Input
        inputText="Name"
        type="text"
        onChange={onChange}
        value={inputText}
      />
      <Input
        inputText="Number"
        type="text"
        onChange={onChangeNumber}
        value={inputNumber}
      />
      <br />
      <Button onClick={handleClick} buttonText="Add" />
      <Header headerText="Numbers" />
      {filteredEntries.map((entry, index) => (
        <Names key={index} name={`${entry.name} : ${entry.number}`} />
      ))}
    </>
  );
};

export default App;
