import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import JobInterview from "./JobInterview";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Quiz from "./Quiz";
import Coach from "./Coach";

function App() {
  const [trophies, setTrophies] = useState(0);

  useEffect(() => {
    const trophiesDataString = localStorage.getItem("my_trophies") || "0";
    const mytrophies = JSON.parse(trophiesDataString);
    setTrophies(mytrophies);
  }, []);

  return (
    <>
      <Navbar trophies={trophies} /> {/* Pass trophies as a prop */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/feedbackForm" element={<FeedbackForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/jobInterview" element={<JobInterview />} />
        <Route path="/coach" element={<Coach />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
