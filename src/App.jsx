import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import JobInterview from "./JobInterview";
import LandingPage from "./LandngPage";
import Navbar from "./Navbar";
import Quiz from "./Quiz";

function App() {
  return(
  <>
  <Navbar/>
 <Routes>

  <Route path="/" element={<LandingPage/>}></Route>
  <Route path="/aboutPage" element={<AboutPage/>}></Route>
  <Route path="/feedbackForm" element={<FeedbackForm/>}></Route>
  <Route path="/quiz" element={<Quiz/>}></Route>
  <Route path="/jobInterview" element={<JobInterview/>}></Route>
  
 </Routes>
  <Footer/>
  </>
  )
}

export default App;
