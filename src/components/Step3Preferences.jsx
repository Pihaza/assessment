export default function Step3Preferences({ data, onChange }) {
   const darkMode = data.theme === "Dark";

  const selectClass = `
    w-full px-4 py-2 rounded border transition
    ${darkMode 
      ? "bg-gray-700 border-gray-600 text-white" 
      : "bg-white border-gray-300 text-black"}
  `;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Theme</label>
        <select
          className={selectClass}
          value={data.theme}
          onChange={(e) => onChange('theme', e.target.value)}
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={data.newsletter}
          onChange={(e) => onChange('newsletter', e.target.checked)}
        />
        <label>Subscribe to newsletter?</label>
      </div>
    </div>
  );
}