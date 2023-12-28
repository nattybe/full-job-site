import React, { useEffect, useState } from "react";
import "./alert.css";
interface AlertProps {
  type: "success" | "error" | "info";
  message: string;
  timeout?: number;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  timeout = 5000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [onClose, timeout]);
  let typeClass = "";

  if (type === "error") {
    typeClass = "bg-red-800 ";
  } else if (type === "success") {
    typeClass = "bg-green-800 ";
  } else {
    typeClass = "bg-yellow-500 ";
  }

  return (
    <div
      id="alertComp"
      className={`alert bottom-10 border rounded-full md:rounded-xl md:bottom-auto md:top-10 ${typeClass} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
