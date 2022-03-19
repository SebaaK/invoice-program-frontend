import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import {AuthProvider} from "./components/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
