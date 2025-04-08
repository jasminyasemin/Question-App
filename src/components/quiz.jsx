// components/Quiz.jsx
import { useEffect, useState } from 'react';
import './quiz.css';

const Quiz = ({ questions, onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    if (seconds === 4) setShowOptions(true);
    if (seconds === 30) handleAnswer(null);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleAnswer = (option) => {
    setUserAnswers([...userAnswers, option]);
    setSeconds(0);
    setShowOptions(false);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onFinish([...userAnswers, option]);
    }
  };

  const q = questions[current];

  return (
    <div className="quiz">
      {q.image && <img src={q.image} alt="question visual" />}
      <h2>{q.question}</h2>
      {showOptions ? (
        <ul className="options">
          {q.options.map((opt, i) => (
            <li key={i} onClick={() => handleAnswer(opt)}>{opt}</li>
          ))}
        </ul>
      ) : (
        <p className='p3'>Hazırlan...</p>
      )}
      <p className='p3'>Süre: {seconds}s</p>
    </div>
  );
};

export default Quiz;