import React, { useEffect } from 'react';
import './Popup.css';

export default function Popup({ isOpen, onClose, children }) {
    useEffect(() => {
        function handleEscape(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup__overlay" onClick={onClose}>
                <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                    <button className="popup__close" onClick={onClose}>
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
}