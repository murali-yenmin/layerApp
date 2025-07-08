import React, { useState, useEffect } from 'react';

interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number; // in milliseconds, 0 for persistent
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-500 border-green-700',
    error: 'bg-red-500 border-red-700',
    info: 'bg-blue-500 border-blue-700',
    warning: 'bg-yellow-500 border-yellow-700',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-md text-white shadow-lg border-l-4 ${typeStyles[type]}`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="flex-grow">{message}</div>
        {duration === 0 && (
          <button onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }} className="ml-4 text-white opacity-75 hover:opacity-100 focus:outline-none">
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
