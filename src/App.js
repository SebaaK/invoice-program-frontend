import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import {AuthProvider} from "./components/AuthProvider/AuthProvider";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Panel from "./components/panel/Panel";
import InvoiceView from "./components/InvoiceView/InvoiceView";

function App() {
  return (
    <AuthProvider>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/businessinfo" element={<RequireAuth><Register/></RequireAuth>} />
            <Route path="/panel" element={<RequireAuth><Panel/></RequireAuth>} />
            <Route path="/fakutra/nowa" element={<RequireAuth><InvoiceView/></RequireAuth>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
