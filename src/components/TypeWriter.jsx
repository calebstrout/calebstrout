import { useEffect, useState } from 'react';

export const Typewriter = ({
  text,
  speed = 50,
  onComplete,
  showCursor = false,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
        setDone(true);
        if (onComplete) {
          setTimeout(() => onComplete(), 500);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !done && <span className="animate-blink ml-1">|</span>}
    </span>
  );
};
