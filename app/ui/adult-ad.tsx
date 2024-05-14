'use client'

// components/AdultAd.js

import { useState, useEffect } from 'react';
import Draggable, {DraggableCore} from "react-draggable";

interface AdultAdProps {
  content: string;
  id: number;
  timeOut: number;

}

const AdultAd: React.FC<AdultAdProps> = ({content, id, timeOut}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, timeOut);

    // Nettoyer le timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, [timeOut]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>

      {isVisible && (
      <Draggable>
        <div className={`mac-popup-${id}`}>
          <div className="mac-popup-header">
            <div className="mac-popup-buttons">
              <div className="mac-popup-button close" onClick={handleClose}></div>
              <div className="mac-popup-button minimize"></div>
              <div className="mac-popup-button zoom"></div>
            </div>
            <div className="mac-popup-title">ADAM MESSADIA</div>
          </div>
          <div className="mac-popup-content">
            <p>{content}</p>
            <div>

            </div>
          </div>
        </div>
      </Draggable>
      )}
    </>
  );
};

export default AdultAd;
