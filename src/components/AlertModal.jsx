export default function AlertModal({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center animate-fadeIn">
        <h2 className="text-xl font-bold mb-4 text-green-600">🎉 Onboarding Complete!</h2>
        <pre className="text-sm text-gray-700 mb-4 whitespace-pre-wrap">{message}</pre>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
