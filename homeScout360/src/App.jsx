// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import HappyClients from "./components/HappyClients";
import PopularHomes from "./components/PopularHomes";
import HowItWorks from "./components/HowItWorks";
import ClientsReviews from "./components/ClientsReviews";
import ReviewForm from "./components/ReviewForm";
import ShareHouse from "./components/ShareHouse";
import FAQSection from "./components/FAQSection";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <LandingPage />
      <HappyClients />
      <PopularHomes />
      <HowItWorks />
      <ClientsReviews />
      <ReviewForm />
      <ShareHouse />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
