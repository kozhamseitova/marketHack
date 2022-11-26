import './App.css';
import Main from "./pages/Main";
import LoginRegister from "./pages/components/LoginRegister";
import {Route, Routes} from "react-router-dom";
import Ex from "./pages/components/Ex";
import ObjectPage from "./pages/components/ObjectPage";




function App() {


  return (
    <div className="App">
        <Routes><Route path="/login" element={<LoginRegister />} /></Routes>
        {/*<Routes><Route path="/" element={<Main />} /></Routes>*/}
        <Routes><Route path="/" element={<Ex />} /></Routes>
        <Routes><Route path="/object" element={<ObjectPage />} /></Routes>
    </div>
  );
}

export default App;
