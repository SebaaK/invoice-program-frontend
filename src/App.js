import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <main>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </main>
  );
}

export default App;
