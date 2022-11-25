import './App.css';
import Main from "./pages/Main";
import LoginRegister from "./pages/components/LoginRegister";
import {Route, Routes} from "react-router-dom";
import ToolBar from "./pages/components/ToolBar";




function App() {
  return (
    <div className="App">
        <ToolBar/>
        <Routes><Route path="/login" element={<LoginRegister />} /></Routes>
        <Routes><Route path="/" element={<Main />} /></Routes>
    </div>
  );
}

export default App;
