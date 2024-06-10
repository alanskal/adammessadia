'use client'

// components/AdultAd.js

import { useState, useEffect } from 'react';
import Draggable from "react-draggable";

interface AdultAdProps {
  content: string;
  id: number;
  timeOut: number;
}

const AdultAd: React.FC<AdultAdProps> = ({ content, id, timeOut }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, timeOut);

    // Nettoyer le timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, [timeOut]);

  useEffect(() => {
    if (isVisible) {
      RandomPosition();
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const RandomPosition = () => {
    const randomTop = Math.random() * 500 + 'px';
    const randomLeft = Math.random() * 600 + 'px';
    const randomPosition = { top: randomTop, left: randomLeft };
    return randomPosition;
  };

  return (
    <>
      {isVisible && (
        <Draggable>
          <div className={`mac-popup-${id}`} style={RandomPosition()}>
            <div className="mac-popup-header">
              <div className="mac-popup-buttons">
                <div className="mac-popup-button close" onClick={handleClose}></div>
                <div className="mac-popup-button minimize"></div>
                <div className="mac-popup-button zoom"></div>
              </div>
              <div className="mac-popup-title">ADAM MESSAADIA</div>
            </div>
            <div className="mac-popup-content">
              <p>{content}</p>
              <div></div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default AdultAd;
