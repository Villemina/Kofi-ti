import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import CaffeMenu from "./pages/CaffeMenu/CaffeMenu";

function App() {
  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="menu" element={<CaffeMenu />} />
              <Route path="events" element={<Events />} />
              <Route path="contact" element={<Contact />} />
          </Routes>
      </ThemeProvider>
  );
}

export default App;
