import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [entries, setEntries] = useState([]);

  function onChange(e) {
    setInputText(e.target.value);
  }

  function onChangeNumber(e) {
    setInputNumber(e.target.value);
  }

  function add() {
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

  return (
    <>
      <Header />
      <Input />
      <Header />
      <Input />
      <Button />
      <Header />
    </>
  );
};

export default App;
