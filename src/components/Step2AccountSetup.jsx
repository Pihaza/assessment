import FormInput from "./FormInput";

export default function Step2AccountSetup({ data, onChange }) {
   const darkMode = data.theme === "Dark";
  return (
    <div className="space-y-4">
         <FormInput
        label="Username"
        value={data.username}
        placeholder="Choose a username"
        darkMode={darkMode}
        onChange={(e) => onChange("username", e.target.value)}
      />
      <FormInput
        label="Password"
        type="password"
        value={data.password}
        placeholder="Create a password"
        darkMode={darkMode}
        onChange={(e) => onChange("password", e.target.value)}
      />
    </div>
  );
}