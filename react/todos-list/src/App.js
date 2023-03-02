import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let myVariable = 345;
  return (
    <>
      <Header title="My Todos List"/>
      <Todos/>
      <Footer/>
    </>
  );
}

// classNameName is JSX i.e. JavaScript Sytax Extention.

export default App;



45.10////////
