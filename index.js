const Box = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return (
    <div className={className}>
      <p className="box-name">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box box" name="Small" />
      <Box className="medium-box box" name="Medium" />
      <Box className="large-box box" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
