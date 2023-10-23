import React, { useState } from 'react';
import './App.css'; // Importe um arquivo CSS para estilizar o layout, se necessário

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    const audio = new Audio(require('./assets/sounds/hector-bell.mp3'));
    audio.play();

    setIsPlaying(true);

    setTimeout(() => setIsPlaying(false), 100)
    
  };

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={require("./assets/img/hector.png")} alt="LOOK" />
        <h1>Hector Bell Button</h1>
        <img className="logo" src={require("./assets/img/hector.png")} alt="AT ME" />
      </div>

      <div className="content">
        <img
          src={require(isPlaying ? './assets/img/clicked-bell.png' : './assets/img/bell.png')}
          alt="Imagem"
          onClick={playSound}
        />
      </div>
    </div>
  );
};

export default App;