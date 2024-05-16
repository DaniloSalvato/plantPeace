import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Discover from "./components/Home/Discover";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Discover />
    </div>
  );
}

export default App;
