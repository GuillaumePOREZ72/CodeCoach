import { Code } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

export function EditorPanel({ code, onChange }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gray-900/90 px-4 py-3 border-b border-gray-700/50 flex items-center gap-3">
        <Code className="w-5 h-5 text-emerald-400" />
        <h3 className="text-white text-lg font-semibold">Solution:</h3>
      </div>
      <CodeMirror
        value={code}
        height="420px"
        extensions={[javascript({ jsx: true })]}
        theme={dracula}
        onChange={onChange}
      />
    </div>
  );
}
