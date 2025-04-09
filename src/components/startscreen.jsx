import './startscreen.css';

const StartScreen = ({ onStart }) => {
    return (
      <div className="start-screen">
        <h1 className='fade-in'>Quiz'e Hoş Geldin!</h1>
        <p>Önünde 10 soru var ve sadece 30 saniyen var...her biri için. Hazır mısın?</p>
        <p className='p2'>Bir cevabı seçtikten sonra ya da süre dolduğunda otomatik olarak bir sonraki soruya geçeceksin.
        Geri dönmek yok.</p>
        <button onClick={onStart}>Başla!</button>
      </div>
    );
  };
  
  export default StartScreen;