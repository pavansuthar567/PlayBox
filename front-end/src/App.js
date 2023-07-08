import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Assets/css/main-css.css";
import "./Assets/css/font.css";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { SubscribeSection } from "./Components/SubscribeSection";
import { WeekSection } from "./Components/WeekSection";
import PlayBoxWorks from "./Components/PlayBoxWorks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WeekSection />
      <SubscribeSection />
      <PlayBoxWorks />
      <Footer />
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
