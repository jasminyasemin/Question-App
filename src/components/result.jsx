import './result.css';

const Result = ({ questions, answers }) => {
  const result = questions.map((q, i) => {
    const userAnswer = answers[i];
    const isSkipped = userAnswer == null || userAnswer === '';
    const isCorrect = q.answer === userAnswer;

    return {
      question: q.question,
      correctAnswer: q.answer,
      userAnswer,
      isCorrect,
      isSkipped,
    };
  });

  const correctCount = result.filter(r => r.isCorrect).length;
  const wrongCount = result.filter(r => !r.isCorrect && !r.isSkipped).length;
  const skippedCount = result.filter(r => r.isSkipped).length;

  return (
    <div className="result">
      <h3>Quiz Tamamlandı!</h3>
      <p className="p4"><img src="/images/thumbsup.png" alt="Doğru" className='result-icon' />Doğru: {correctCount}</p>
      <p className="p4"><img src="/images/thumbsdown.png" alt="Yanlış" className='result-icon2' />Yanlış: {wrongCount}</p>
      <p className="p4"><img src="/images/skipped.png" alt="Boş" className='result-icon3' />Boş: {skippedCount}</p>

      <div className="details">
        <h4>Detaylı Sonuçlar:</h4>
        {result.map((r, index) => (
          <div key={index} className={`question-result ${r.isCorrect ? 'correct' : r.isSkipped ? 'skipped' : 'wrong'}`}>
            <p><strong>Soru {index + 1}:</strong> {r.question}</p>
            <p><strong>Senin Cevabın:</strong> {r.userAnswer || 'Boş bırakıldı'}</p>
            {r.isCorrect ? (
              <p className="status correct"><img src="/images/thumbsup.png" alt="Doğru" className='status-icon' /> Doğru cevap!</p>
            ) : r.isSkipped ? (
              <>
                <p className="status skipped"><img src="/images/skipped.png" alt="Boş" className='status-icon' /> Cevap verilmedi</p>
                <p><strong>Doğru Cevap:</strong> {r.correctAnswer}</p>
              </>
            ) : (
              <>
                <p className="status wrong"><img src="/images/thumbsdown.png" alt="Yanlış" className='status-icon' /> Yanlış cevap</p>
                <p><strong>Doğru Cevap:</strong> {r.correctAnswer}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;