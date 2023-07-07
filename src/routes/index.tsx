import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "../pages/About"
import { Projects } from "../pages/Projects"
import { Contact } from "../pages/Contact"
import { Skills } from "../pages/Skills"

const AppRoutes = () => {
    return (
        <BrowserRouter>
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