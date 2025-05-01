import { useState, useEffect, useMemo } from 'react';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function TypingEffect({ words, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const longestWordLength = useMemo(() => Math.max(...words.map((w) => w.length)), [words]);

  useEffect(() => {
    const current = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => current.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => current.substring(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span
      className="text-primary font-semibold inline-block whitespace-nowrap"
      style={{ minWidth: `${longestWordLength + 1}ch` }} // +1 for cursor
    >
      <span className="inline-block align-baseline">
        {text}
        <span className="inline-block align-baseline bg-primary dark:bg-primary animate-blink" style={{ width: '1ch', height: '1em', marginLeft: '2px' }} />
      </span>
    </span>
  );
}
