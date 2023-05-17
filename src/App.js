import { BrowserRouter as Router, Route,Routes} from "react-router-dom"

import Library from "./components/pages/Library"
import Search from "./components/pages/Search"
import Home from "./components/pages/Home"

import Container from "./components/layout/Container"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"


function App() {
  
  
  return (
    <Router>
      
      <NavBar/>
        
      <Container customClass = "minHeight">
        <Routes>
          
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/search" element={<Search/>}/>
          <Route exact path ="/libary" element={<Library/>}/>
        
        </Routes>
        
      </Container>
      

      <Footer/>
      
    </Router>

   
  );
}

export default App;
