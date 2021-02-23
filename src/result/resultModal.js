import { useEffect } from "react";
import "./resultModal.scss";

export function ResultModal({result}) {
  console.log(result);

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
      <button onClick={_restart}>Restart</button>

      </div>
    </div>
  );
}
