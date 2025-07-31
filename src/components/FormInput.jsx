export default function FormInput({
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  darkMode = false,
}) {
  const inputClass = `
    w-full px-4 py-2 rounded border transition
    ${darkMode 
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500" 
      : "bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500"}
  `;

  return (
    <div className="space-y-1">
      {label && <label className="block text-sm">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
