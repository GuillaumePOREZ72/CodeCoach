export function ProblemPanel({ data }) {
  if (!data) return null;

  const constraintLines = (data.constraints || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <div className="bg-gradient-to-br from-blue-950/40 to-sky-950/50 backdrop-blur-sm border border-indigo-400/30 rounded-2xl shadow-2xl p-8 space-y-4">
      <section>
        <h3 className="text-lg font-semibold text-emerald-300">Problem</h3>
        <p className="text-gray-200">{data.problem}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-emerald-300">Example</h3>
        <pre className="bg-black/30 p-3 rounded text-gray-200 whitespace-pre-wrap">
          {data.example}
        </pre>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-emerald-300">Constraints</h3>
        <ul className="list-disc list-inside text-gray-200">
          {constraintLines.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </section>

      {!!data.note && (
        <section>
          <h3 className="text-lg font-semibold text-emerald-300">Note</h3>
          <p className="text-gray-200">{data.note}</p>
        </section>
      )}
    </div>
  );
}
