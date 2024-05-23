import { useState } from "react";
import axios from "axios";
import { BiCompass } from "react-icons/bi";

function JobInterview() {
  const [field, setField] = useState("general");
  const [questionTemplate, setQuestionTemplate] = useState(
    `You are a job interviewer for freshers in the {field} field. Ask frequently asked interview questions including technical and problem-solving questions, and wait for the response, then ask another and so on. The response should be in the following json format: {"questions": [{"id": 0, "question": ""},...]} (do not add anything out of format. KEEP THE RESPONSE IN THE GIVEN FORMAT)`
  );
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [questionsGenerated, setQuestionsGenerated] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [interviewFinished, setInterviewFinished] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [report, setReport] = useState("");

  const fields = ["general", "software", "mechanical", "electrical", "civil"];

  async function generateQuestions(e) {
    e.preventDefault();
    setLoading(true);

    const formattedQuestionTemplate = questionTemplate.replace("{field}", field);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDJm_JZZn8ZWwZIdTistdc33HDb-wY8pqw",
        method: "post",
        data: {
          contents: [{ parts: [{ text: formattedQuestionTemplate }] }],
        },
      });

      const generatedText = response.data.candidates[0].content.parts[0].text;
      const parsedResponse = JSON.parse(generatedText);
      setQuestions(parsedResponse.questions);
      setLoading(false);
      setQuestionsGenerated(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const startInterview = () => {
    setInterviewStarted(true);
    setInterviewFinished(false);
    setCurrentQuestionIndex(0);
    setUserResponses([]);
    setCurrentResponse("");
  };

  const handleSubmitResponse = () => {
    setUserResponses([...userResponses, currentResponse]);
    setCurrentResponse("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setInterviewFinished(true);
      setInterviewStarted(false);
      generateReport();
    }
  };

  const generateReport = () => {
    let reportText = "Interview Report:\n";
    questions.forEach((question, index) => {
      reportText += `Q${index + 1}: ${question.question}\n`;
      reportText += `Your Answer: ${userResponses[index]}\n\n`;
    });
    setReport(reportText);
  };

  return (
    <div className="min-h-screen p-5 text-white bg-gray-900">
      <div className="max-w-4xl p-6 mx-auto bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeIn">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-indigo-400">Job Interview</h1>
        <form onSubmit={generateQuestions} className="mb-6 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="field" className="block text-sm font-medium text-gray-300">
              Select Interview Field
            </label>
            <select
              id="field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="block w-full mt-1 text-white bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              {fields.map((fieldOption) => (
                <option key={fieldOption} value={fieldOption}>
                  {fieldOption.charAt(0).toUpperCase() + fieldOption.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 animate__animated animate__pulse"
            disabled={loading}
          >
            Generate Questions
          </button>
        </form>
        {loading && <BiCompass className="m-auto text-3xl text-indigo-400 animate-spin animate__animated animate__rotateIn" />}
        {questionsGenerated && !loading && (
          <button
            onClick={startInterview}
            className="w-full px-4 py-2 mb-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate__animated animate__fadeIn"
          >
            {interviewFinished ? "Restart Interview" : "Start Interview"}
          </button>
        )}
        {interviewFinished && (
          <div className="text-center animate__animated animate__fadeIn">
            <p className="text-2xl font-semibold text-green-400">Interview Finished</p>
            <pre className="p-4 mt-4 text-left bg-gray-800 rounded">{report}</pre>
            <div className="p-4 mt-4 bg-gray-700 border-2 border-red-600 rounded-lg">
              <h3 className="text-xl font-semibold text-red-400">Areas to Improve:</h3>
              <ul className="list-disc list-inside">
                <li>Communication skills</li>
                <li>Problem-solving abilities</li>
                <li>Technical knowledge</li>
              </ul>
            </div>
          </div>
        )}
        {interviewStarted && !interviewFinished && (
          <div className="animate__animated animate__fadeIn">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-300">{questions[currentQuestionIndex].question}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <textarea
                rows="4"
                className="w-full px-4 py-2 text-gray-200 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 animate__animated animate__bounceIn"
                placeholder="Type your answer here..."
                value={currentResponse}
                onChange={(e) => setCurrentResponse(e.target.value)}
              ></textarea>
            </div>
            <button
              onClick={handleSubmitResponse}
              className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate__animated animate__fadeIn"
            >
              Submit Answer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobInterview;
