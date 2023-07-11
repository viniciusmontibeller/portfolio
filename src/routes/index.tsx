import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "../pages/About"
import { Projects } from "../pages/Projects"
import { Contact } from "../pages/Contact"
import { Skills } from "../pages/Skills"
import ScrollToTop from "../components/ScrollToTop"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/skills" element={<Skills />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }