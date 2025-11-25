const Message = (props) => {
  const { text, bgcolor } = props;

  return (
    <div
      style={{
        background: bgcolor,
        color: "white",
      }}
    >
      {text}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Message text="this is my first porp" bgcolor="green" />
      <Message text="lawyer" bgcolor="blue" />
    </>
  );
};
export default App;
