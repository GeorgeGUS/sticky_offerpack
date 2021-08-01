import "normalize.css";
import OfferPack from "./OfferPack";
import "./App.css";

const list = Array(15).fill("");

const App = () => {
  const onSubmit = (value) => {
    console.dir(value);
    const newUrl = window.location.href.replace(/\/[^/]*$/, `/${value}`);
    window.location.href = newUrl;
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
