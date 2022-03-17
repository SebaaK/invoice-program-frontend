import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <main>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </main>
  );
}

export default App;
