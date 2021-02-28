import "./App.css";
import HomePage from "./components/pages/HomePage";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/components/Navbar";

function App() {
  return (
    <div className="App" >
      <CssBaseline />
      <Navbar />
      {/* TODO: Routes */}
      <HomePage />
    </div>
  );
}

export default App;
