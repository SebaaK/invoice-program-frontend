import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";

function App() {
  return (
    <main>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>} />
        </Routes>
    </main>
  );
}

export default App;
