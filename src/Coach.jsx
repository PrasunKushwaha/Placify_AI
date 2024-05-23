import { useState } from "react";
import axios from "axios";
import { BiCompass } from "react-icons/bi";

function Coach() {
  const [field, setField] = useState("general");
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [technologiesGenerated, setTechnologiesGenerated] = useState(false);
  const [learningApproaches, setLearningApproaches] = useState({});

  const fields = ["general", "software", "mechanical", "electrical", "civil"];

  async function generateTechnologies(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDJm_JZZn8ZWwZIdTistdc33HDb-wY8pqw",
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          contents: [{ parts: [{ text: `Generate most used and on demand technologies related to the field of ${field}. The response should be in the following json format: {
  "technologies": ["Technology1", "Technology2", ...],
  "learningApproaches": {
    "Technology1": "Learning approach for Technology1",
    "Technology2": "Learning approach for Technology2",
    ...
  }
} (do not add anything out of format. KEEP THE RESPONSE IN THE GIVEN FORMAT)` }] }]
        }
      });

      console.log(response.data); // Log the response to check the structure

      const generatedContent = response.data.candidates[0].content.parts[0].text;
      const parsedContent = JSON.parse(generatedContent);

      setTechnologies(parsedContent.technologies);
      setLearningApproaches(parsedContent.learningApproaches);
      setLoading(false);
      setTechnologiesGenerated(true);
    } catch (error) {
      console.error("Error generating technologies:", error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen p-5 text-white bg-gray-900">
      <div className="max-w-4xl p-6 mx-auto bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeIn">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-indigo-400">Technology Advisor</h1>
        <form onSubmit={generateTechnologies} className="mb-6 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="field" className="block text-sm font-medium text-gray-300">
              Select Field of Study
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
            Generate Technologies
          </button>
        </form>
        {loading && <BiCompass className="m-auto text-3xl text-indigo-400 animate-spin animate__animated animate__rotateIn" />}
        {technologiesGenerated && !loading && (
          <div className="animate__animated animate__fadeIn">
            <h2 className="text-2xl font-bold text-center text-green-400">Recommended Technologies</h2>
            <ul className="mt-4 space-y-2">
              {technologies.map((tech, index) => (
                <li key={index} className="px-4 py-2 bg-gray-700 rounded-md">
                  {tech}
                </li>
              ))}
            </ul>
            <h2 className="mt-6 text-2xl font-bold text-center text-yellow-400">Learning Approaches</h2>
            <ul className="mt-4 space-y-2">
              {Object.entries(learningApproaches).map(([tech, approach], index) => (
                <li key={index} className="px-4 py-2 bg-gray-700 rounded-md">
                  <strong>{tech}:</strong> {approach}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Coach;
