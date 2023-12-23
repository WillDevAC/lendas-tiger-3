import React, { useState, useEffect } from "react";
import { BigPlayButton, ControlBar, Player } from "video-react";

const App: React.FC = () => {
  const [countdown, setCountdown] = useState(0);
  const [normal, setNormal] = useState("--.");
  const [turbo, setTurbo] = useState("");
  const [validade, setValidade] = useState("");

  const handleGenerateSignal = () => {
    setCountdown(30);

    setNormal(generateRandomValue());
    setTurbo(generateRandomValue());

    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 5);
    const timeString = formatTime(currentDate);
    setValidade(timeString);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0 && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [countdown]);

  const generateRandomValue = () => {
    return `${Math.floor(Math.random() * 10) + 1}X`;
  };

  const formatTime = (date: Date) => {
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <main>
      <div style={{ backgroundColor: "green" }}>
        <p style={{ color: "white", margin: "0px", padding: "15px 5px" }}>
          Mais de <span style={{ color: "#FF8400" }}>3.567 pessoas</span>{" "}
          conseguiram <span style={{ color: "#FF8400" }}>GANHAR</span> mais de{" "}
          <span style={{ color: "#FF8400" }}>R$ 500,00</span> apenas fazendo o
          depósito de R$ 30,00 e seguindo os sinais do nosso{" "}
          <span style={{ color: "#FF8400" }}>Aplicativo</span> abaixo!
        </p>
      </div>
      <section id="sec01">
        <div className="ul-container">
          <ul>
            <li>
              <img src="/iconentrada.png" alt="" />
              <p>
                NORMAL <span id="normal">{normal}</span>
              </p>
            </li>
            <li>
              <img src="/iconturbo.png" alt="" />
              <p>
                TURBO <span id="turbo">{turbo}</span>
              </p>
            </li>
            <li>
              <img src="/iconvalidade.png" alt="" />
              <p>
                VALIDADE <span id="validade">{validade}</span>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <button
            onClick={handleGenerateSignal}
            disabled={countdown > 0}
            id="btn-enviar"
          >
            {countdown > 0 ? `Aguarde ${countdown}s...` : "GERAR NOVO SINAL"}
          </button>
        </div>
      </section>
      <iframe src="https://tracker.lendasbet.com/link?btag=53229693_310513"></iframe>
      <div className="containertutorial">
        <h1>VEJA ABAIXO O TUTORIAL</h1>
      </div>
      <div className="videoContainer">
        <Player
          playsInline
          poster="cover.jpg"
          src="tutorial.mp4"
          startTime={1}
        >
          <BigPlayButton position="center" />
          <ControlBar disableDefaultControls={true} className="my-class" />
        </Player>
      </div>
    </main>
  );
};

export default App;
