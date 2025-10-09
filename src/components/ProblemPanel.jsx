export function ProblemPanel({ data, language = "JavaScript" }) {
  if (!data) return null;

  return (
    <div className="bg-gradient-to-br from-blue-950/40 to-sky-950/50 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-6 text-gray-200 space-y-5">
      <section className="space-y-2">
        <h2 className="text-2xl font-bold text-emerald-300">
          {" "}
          <span className="mr-2">📝</span>Problem
          {language && (
            <span className="px-3 py-1 mx-6 bg-gradient-to-r from-sky-400 to-emerald-400 text-white text-sm font-semibold rounded-full">
              {language}
            </span>
          )}
        </h2>
        <p className="text-gray-200 mt-3">{data.problem}</p>
      </section>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-sky-400 mb-2">
            Description
          </h3>
          <p className="text-slate-300 leading-relaxed">{data.problem}</p>
        </div>

        {data.example && (
          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Example</h3>
            <pre className="bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm border border-gray-700">
              <code className="text-green-300">{data.example}</code>
            </pre>
          </div>
        )}

        {data.constraints && (
          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-2">
              Constraints
            </h3>
            <p className="text-slate-300 leading-relaxed">{data.constraints}</p>
          </div>
        )}

        {data.note && (
          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Note</h3>
            <p className="text-slate-300 leading-relaxed italic">{data.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
