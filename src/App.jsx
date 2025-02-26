import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import TextEditor from "./components/TextEditor";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={LandingPage} />
          <Route path="/counter" exact Component={Counter} />
          <Route path="/texteditor" exact Component={TextEditor} />
          <Route path="/signup" exact Component={Register} />
          <Route path="/login" exact Component={Login} />
          <Route path="/dashboard" exact Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
