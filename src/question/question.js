import "./question.scss";

function Question() {
  return (
    <div className="ques-container height100">
      <div className="img-wrapper flex">
        <img src="/questions/1.png" />
      </div>
      <div className="options">
        <button>a) undefined</button>
        <button>b) 0</button>
        <button>c) null</button>
        <button>d) Error</button>
      </div>
    </div>
  );
}

export default Question;
