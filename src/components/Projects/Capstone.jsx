const CapstoneModal = ({ onClose }) => {
  const handleSendClick = () => {
    onClose()
    window.location.href = '#contact'
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-green-400 rounded-xl p-6 w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Full Capstone System</h2>
        <p className="text-gray-800">
          Our Full Capstone System is an all-in-one solution that includes a Website, Mobile App, and Desktop Application.
          Ideal for school, business, or startup projects.
        </p>
        <div className="mt-6 text-right">
          <button onClick={handleSendClick} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg">
            Choose This
          </button>
        </div>
      </div>
    </div>
  )
}

export default CapstoneModal
