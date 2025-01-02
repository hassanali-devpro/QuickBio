import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import CourseHome from "./components/Products"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Industries from "./components/Industries"
import Footer from "./components/common/footer/Footer"
import Lacto from "./components/ProductPages/Lacto"
import Food from "./components/ProductPages/Food"
import Feed from "./components/ProductPages/Feed"
import Vet from "./components/ProductPages/Vet"
import Micro from "./components/ProductPages/Micro"
import Pricing from "./components/Pricing"
import Moveup from "./components/MoveUp/MoveUp"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<CourseHome />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/lacto' element={<Lacto />} />
          <Route path='/food' element={<Food />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/vet' element={<Vet />} />
          <Route path='/micro' element={<Micro />} />
        </Routes>
        <Moveup />
        <Footer />
      </Router>
    </>
  )
}

export default App
