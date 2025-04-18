import React, { useState } from "react";
import "./CaseOpener.css";

function CaseOpener() {
  const [isOpening, setIsOpening] = useState(false);
  const [result, setResult] = useState(null);

  const openCase = () => {
    if (isOpening) return;
    setIsOpening(true);
    setResult(null);

    setTimeout(() => {
      setIsOpening(false);
      setResult("Вы выиграли ПОДАРОК!");
    }, 3000);
  };

  return (
    <div className="case-opener">
      <button onClick={openCase} disabled={isOpening}>
        {isOpening ? "Открытие..." : "Открыть кейс за 1.5 TON"}
      </button>
      <div className={`case-animation ${isOpening ? "active" : ""}`} />
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default CaseOpener;
