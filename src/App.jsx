import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "./Components/Home";
import Header from "./Components/Header";

import "./styels/app.scss";
import "./styels/header.scss";
import "./styels/home.scss"


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
