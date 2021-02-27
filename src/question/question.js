import React, { useEffect } from "react";
import { ResultModal } from "../result/resultModal";
import "./question.scss";

function Question() {
  const [data, setData] = React.useState([]);
  const [selectedQues, setSelectedQues] = React.useState(null);
  const [result, setResult] = React.useState(null);

  useEffect(() => {
    fetch("/questionsList.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((element) => {
          element["selectedOption"] = null;
          element["currentQues"] = false;
          element["result"] = null;
        });
        setData(data);
        setSelectedQues(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const _nextQuestion = () => {
    if (!selectedQues.result) return;
    setSelectedQues(data[selectedQues.id]);
  };

  const _onSelect = (opt, i) => {
    if (selectedQues.result) return;

    data.forEach((quesObj) => {
      if (quesObj.id === selectedQues.id) {
        quesObj["selectedOption"] = i;
      }
    });

    let l_result = i === selectedQues["answer_index"] ? "P" : "F";

    if (l_result === "P") {
      setSelectedQues({
        ...selectedQues,
        greenIndex: i,
        redIndex: null,
        result: l_result,
        selectedOption: i,
      });
    } else {
      setSelectedQues({
        ...selectedQues,
        greenIndex: selectedQues["answer_index"],
        redIndex: i,
        result: l_result,
        selectedOption: i,
      });
    }
  };

  const _calcResult = () => {
    let obj = {
      score: data.filter((ele) => ele.answer_index === ele.selectedOption)
        .length,
      total: data.length,
    };
    setResult(obj);
  };

  const _getClassName = (i) => {
    console.log(selectedQues);
    let className = "";
    className = selectedQues.result ? "selectionMade":"";
    if (selectedQues["greenIndex"] === i) {
      className += " green";
    } else if (selectedQues["redIndex"] === i) {
      className += " red";
    }
    return className;
  };

  const _getNextContainer = () => {
    if (selectedQues.id === data.length) {
      return (
        <div
          className={selectedQues.result ? "finish" : "finish notAllowed"}
          onClick={_calcResult}
        >
          Finish!
        </div>
      );
    } else {
      return (
        <div
          className={selectedQues.result ? "nextQues" : "nextQues notAllowed"}
          onClick={_nextQuestion}
        >
          <img src="/icons/rightArrow.png" alt="Next" />
          <div>Next</div>
        </div>
      );
    }
  };

  if (selectedQues) {
    return (
      <div className="ques-container height100">
        <div className="img-wrapper flex">
          <img src={selectedQues.question_image} />
        </div>
        <div className="options">
          {selectedQues.options.map((option, index) => {
            return (
              <div key={index}>
                <span className="no">{index + 1 + ")"}</span>
                <button
                  key={index}
                  onClick={() => _onSelect(option, index)}
                  className={_getClassName(index)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {option}
                </button>
              </div>
            );
          })}
        </div>
        <div className="quizStatus">
          <span>{selectedQues.id}</span> / {data.length}
        </div>
        {_getNextContainer()}
        {result && <ResultModal result={result} />}
      </div>
    );
  } else return <div className="loading">Loading...</div>;
}

export default Question;
