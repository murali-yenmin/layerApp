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
  return (
    <div className="modal-overlay">
      <div className={`modal-content ${size}`}>
        {enableHeader && (
          <div className="modal-header">
            <button onClick={closeModal}>&times;</button>
          </div>
        )}
        <div className="modal-body">{children}</div>
        {enableFooter && <div className="modal-footer"></div>}
      </div>
    </div>
  );
};
