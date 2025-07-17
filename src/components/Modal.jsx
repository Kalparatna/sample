import React from 'react';

const Modal = ({ title, content, onClose, onAccept, showAccept }) => (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-xl font-bold text-[#00A0C4]">{title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl font-bold">×</button>
      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto max-h-[65vh] text-gray-700 text-sm leading-relaxed space-y-4">
        {content}
      </div>

      {/* Accept Button */}
      {showAccept && (
        <div className="p-4 border-t text-right">
          <button
            onClick={onAccept}
            className="bg-[#00A0C4] hover:bg-[#0088a9] text-white px-5 py-2 rounded-xl transition"
          >
            Accept
          </button>
        </div>
      )}
    </div>
  </div>
);

export default Modal;
