import FormInput from "./FormInput";

export default function Step1PersonalInfo({ data, onChange }) {
   const darkMode = data.theme === "Dark";

    const inputClass = `
    w-full px-4 py-2 rounded border transition
    ${darkMode 
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500" 
      : "bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500"}
  `;

  return (
    <div className="space-y-4">
      <FormInput
        label="Full Name"
        value={data.fullName}
        placeholder="Enter your name"
        darkMode={darkMode}
        onChange={(e) => onChange("fullName", e.target.value)}
      />
     
         <FormInput
        label="Email Address"
        type="email"
        value={data.email}
        placeholder="Enter your email"
        darkMode={darkMode}
        onChange={(e) => onChange("email", e.target.value)}
      />
    </div>
  );
}