type Props = {
  text: string;
};

export default function SummaryCard({ text }: Props) {
  const summary = text.split(".").slice(0, 3).join(". ") + "."; // first 3 sentences

  return (
    <div className="mt-6 p-4 bg-yellow-100 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold mb-2 text-yellow-800">🧠 AI Summary (Simulated)</h2>
      <p className="text-gray-800">{summary}</p>
    </div>
  );
}
