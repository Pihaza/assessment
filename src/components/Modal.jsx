import { useState } from 'react';
import Step1 from './Step1PersonalInfo';
import Step2 from './Step2AccountSetup';
import Step3 from './Step3Preferences';
import StepNavigation from './StepNavigation';
import AlertModal from './AlertModal';

export default function Modal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    theme: 'Light',
    newsletter: false
  });

  const isStepValid = () => {
    if (currentStep === 0)
      return formData.fullName && /\S+@\S+\.\S+/.test(formData.email);
    if (currentStep === 1)
      return formData.username.length > 2 && formData.password.length > 5;
    return true;
  };

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const StepComponents = [
    <Step1 data={formData} onChange={updateField} />,
    <Step2 data={formData} onChange={updateField} />,
    <Step3 data={formData} onChange={updateField} />
  ];

  const next = () => currentStep < 2 && isStepValid() && setCurrentStep(currentStep + 1);
  const back = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  const alertMessage = `
Name: ${formData.fullName}
Email: ${formData.email}
Username: ${formData.username}
Theme: ${formData.theme}
Newsletter: ${formData.newsletter ? 'Yes' : 'No'}`;

//   const submit = () => {
//     const msg = `
// 🎉 Onboarding Complete!
// Name: ${formData.fullName}
// Email: ${formData.email}
// Username: ${formData.username}
// Theme: ${formData.theme}
// Newsletter: ${formData.newsletter ? 'Yes' : 'No'}
//     `;
//     alert(msg);
//   };

const submit = () => setShowAlert(true);

  const darkMode = formData.theme === "Dark";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} 
          rounded-lg shadow-lg w-full max-w-lg p-6 transition-all duration-500 ease-in-out animate-fadeIn`}
      >
        <StepNavigation currentStep={currentStep} />
        <div className="mb-6 animate-fadeSlide">
          {StepComponents[currentStep]}
        </div>

        <div className="flex justify-between">
  {currentStep > 0 ? (
    <button onClick={back} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition">
      Back
    </button>
  ) : <div></div>}

  {currentStep < 2 ? (
    <button
      onClick={next}
      disabled={!isStepValid()}
      className={`px-4 py-2 rounded transition ${
        isStepValid()
          ? "bg-blue-500 hover:bg-blue-600 text-white"
          : "bg-gray-200 text-gray-400 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  ) : (
    <button
      onClick={submit}
      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
    >
      Submit
    </button>
  )}
</div>
      </div>
      {showAlert && (
        <AlertModal
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}