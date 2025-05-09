import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./screens/Signup.jsx"

function App() {


  return (
    <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/signup" element={<Signup/>}/>
              {/* <Route path="/login" element={Login}></Route> */}
            </Routes>
          </div>

          </Router>    
    </>
  )
}

export default App
