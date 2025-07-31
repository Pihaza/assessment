export default function StepNavigation({ currentStep }) {
  const steps = ["Personal Info", "Account Setup", "Preferences"];
  return (
    <div className="flex justify-around mb-6">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`text-sm px-3 py-1 rounded-t border-b-2 transition font-medium ${
            currentStep === index
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-400 hover:text-blue-400"
          }`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}