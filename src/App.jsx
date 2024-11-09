import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import CourseHome from "./components/Products"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<CourseHome />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
