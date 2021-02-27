import { useEffect } from "react";
import "./resultModal.scss";

export function ResultModal({result}) {

  useEffect(()=>{
  },[result]);

  const _restart = () => {
      window.location = "/"
  }

  return (
    <div className="result-wrapper">
      <div className="result-container">
        <h2>certificate of appreciation</h2>
        <div className="score">
          <img src="/trophy.jpg" alt="trophy" />
          <div className="textCenter">
            <h3>Score</h3>
            <p>{result?.score} / {result?.total}</p>
          </div>
        </div>
        <div className="signContainer">
          <div>Awarded by</div>
          <div className="name">Vinoth Sharma</div>
        </div>
      <button onClick={_restart}>Retry</button>

      </div>
    </div>
  );
}
