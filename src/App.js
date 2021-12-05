import Appbar from "components/appbar/appbar";
import Boardbar from "components/boardbar/boardbar";
import Boardcontent from "components/boardcontent/boardcontent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Boardbar />
      <Boardcontent />
    </div>
  );
}

export default App;
