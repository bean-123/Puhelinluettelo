const Input = (props) => {
  return (
    <>
      <p>{props.inputText}</p>
      <input type="text" onChange={props.onChange} value={props.value}></input>
    </>
  );
};

export default Input;
