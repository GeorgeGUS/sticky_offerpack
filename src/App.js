import "normalize.css";
import OfferPack from "./OfferPack";
import "./App.css";

const list = Array(15).fill("");

const App = () => {
  const onSubmit = (value) => {
    console.dir(value);
    window.location.href = `/${value}`;
  };
  return (
    <div className="App">
      <div className="TopBlock" />
      {list.map((_, i) => (
        <OfferPack key={i} index={i} onSubmit={onSubmit} />
      ))}
    </div>
  );
};

export default App;
