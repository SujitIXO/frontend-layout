import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import UploadFilePage from "./pages/UploadFilePage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginRegisterPage />} />
            <Route path="/uploadfile" element={<UploadFilePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
