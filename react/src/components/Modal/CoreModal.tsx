import React from 'react';

interface CoreModalProps {
  size: string;
  enableFooter: boolean;
  enableHeader: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const CoreModal: React.FC<CoreModalProps> = ({
  size,
  enableFooter,
  enableHeader,
  closeModal,
  children,
}) => {
  const modalSizeClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  }[size] || "max-w-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
      <div className={`relative p-6 bg-white rounded-lg shadow-xl mx-auto ${modalSizeClass} w-full`}>
        {enableHeader && (
          <div className="flex justify-between items-center pb-3 border-b border-gray-200 mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Modal Title</h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="modal-body">{children}</div>
        {enableFooter && <div className="modal-footer pt-4 border-t border-gray-200 mt-4"></div>}
      </div>
    </div>
  );
};
