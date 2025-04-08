// App.jsx
import { useState } from 'react';
import StartScreen from './components/startscreen';
import Quiz from './components/quiz';
import Result from './components/result';
import questions from './data/questions';

function App() {
  const [step, setStep] = useState('start');
  const [answers, setAnswers] = useState([]);

  const startQuiz = () => setStep('quiz');
  const finishQuiz = (userAnswers) => {
    setAnswers(userAnswers);
    setStep('result');
  };

  return (
    <div className="app">
      {step === 'start' && <StartScreen onStart={startQuiz} />}
      {step === 'quiz' && <Quiz questions={questions} onFinish={finishQuiz} />}
      {step === 'result' && <Result questions={questions} answers={answers} />}
    </div>
  );
}

export default App;