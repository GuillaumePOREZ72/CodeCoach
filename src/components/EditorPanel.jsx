import { Code } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { getLanguageExtension } from "../utils/languageExtensions";

export function EditorPanel({ code, onChange, language = "JavaScript" }) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
        <span>💻</span> Code Editor
        {language && (
          <span className="text-sm font-normal text-slate-400 ml-2">
            ({language})
          </span>
        )}
      </h2>
      <CodeMirror
        value={code}
        height="500px"
        extensions={[getLanguageExtension(language)]}
        theme={dracula}
        onChange={onChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightActiveLine: true,
          foldGutter: true,
        }}
        className="text-base rounded-xl overflow-hidden border border-gray-700"
      />
    </div>
  );
}
