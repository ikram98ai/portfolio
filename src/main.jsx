import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Contact /> */}
    <Footer />
  </StrictMode>
);
