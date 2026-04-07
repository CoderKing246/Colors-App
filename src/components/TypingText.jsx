import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default TypingText;