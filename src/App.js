import "./App.css";
import LandingPage from "./landingPage/landingpage";
import Question from "./question/question";
import  React  from "react";

function App() {
  const [page,setPage] = React.useState("landing");



  return (
    <div className="app">

      {
        page === "landing" ?  <LandingPage onStart={setPage} /> : <Question />
      }

      
    </div>
  );
}

export default App;
