'use client'

// components/AdultAd.js

import { useState, useEffect } from 'react';

const AdultAd = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, props.timeOut);

    // Nettoyer le timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className={`mac-popup-${props.id}`}>
          <div className="mac-popup-header">
            <div className="mac-popup-buttons">
              <div className="mac-popup-button close" onClick={handleClose}></div>
              <div className="mac-popup-button minimize"></div>
              <div className="mac-popup-button zoom"></div>
            </div>
            <div className="mac-popup-title">ADAM MESSADIA</div>
          </div>
          <div className="mac-popup-content">
            <p>{props.content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AdultAd;
