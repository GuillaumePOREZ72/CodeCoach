import { useState, useEffect } from "react";
import { Code, Play, RotataCcw, CheckCircle, ArrowLeft } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";

function App() {
  const [aiReady, setAiReady] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [code, setCode] = useState(
    `function solution() {\n // Your code here\n}`
  );
  const [feedBack, setFeedBack] = useState("");
  const [loading, setLoading] = useState(false);
  const [solved, setSolved] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.puter?.ai?.chat) {
        setAiReady(true);
        clearInterval(checkReady);
      }
    }, 300);
    return () => {
      clearInterval(checkReady);
    };
  }, []);

  const handleDifficultySelect = (level) => {
    setDifficulty(level);
    if (warning) setWarning("");
  };

  const generateQuestion = async () => {
    const validLevels = ["Beginner", "Medium", "Intermediate"];

    if (!validLevels.includes(difficulty)) {
      setWarning(
        "⚠️ PLease select a difficulty level before genrating a question."
      );
      return;
    }

    setWarning("");
    setLoading(true);
    setFeedBack("");
    setSolved(false);
    setCode(`function solution() {\n // Your code here\n}`);
    setQuestionData(null);
  };

  const checkSolution = async () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-950 to-teal-900 flex flex-col items-center justify-center p-6 gap-10">
      <h1 className="text-7xl text-white">JobSensei</h1>
    </div>
  );
}

export default App;
