// const Dan = {
//   name: "Daniel Ambrose",
//   age: 26,
//   occupation: "Web Developer",
// };
// console.log(Dan.name);

const Message = (props) => {
  const { text } = props;
  // console.log(props);
  // return <div> hellll {text}</div>;

  return (
    <div
      style={{
        background: "blue",
        color: "white",
      }}
    >
      hellll {text}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Message text="this is my first porp" />
    </>
  );
};
export default App;
