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
import Forgotpass from "./Forgotpass";
import Login from "./Login";
import Signup from "./Signup";


function App() {
  const [trophies, setTrophies] = useState(0);
  const [user, setUser] = useState()
console.log('logged in user is:',user)

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
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;