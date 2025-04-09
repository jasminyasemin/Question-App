import './result.css';

const Result = ({ questions, answers }) => {
    const result = questions.map((q, i) => ({
      correct: q.answer === answers[i],
      skipped: answers[i] == null,
    }));

    const correctCount = result.filter(r => r.correct).length;
    const wrongCount = result.filter(r => r.correct === false && r.skipped === false).length;
    const skippedCount = result.filter(r => r.skipped).length;
  
    return (
      <div className="result">
        <h3>Quiz Tamamlandı!</h3>
        <p className='p4'>Doğru: {correctCount}</p>
        <p className='p4'>Yanlış: {wrongCount}</p>
        <p className='p4'>Boş: {skippedCount}</p>
      </div>
    );
  };
  
  export default Result;